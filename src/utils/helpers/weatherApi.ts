import axios from "axios";
import toast from "react-hot-toast";

async function getTodayWeather(
  coords: { lat: string | undefined; lon: string | undefined } | null
) {
  const defaultCoords = { lat: "37.7749", lon: "122.4194" };
  const usedCoords = coords?.lat ? coords : defaultCoords;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${usedCoords.lat}&longitude=${usedCoords.lon}&current=temperature_2m,apparent_temperature,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

    const res = await axios.get(url);
    const data = res.data;

    return {
      currentTemp: data.current.temperature_2m,
      feelsLike: data.current.apparent_temperature,
      weatherCode: data.current.weathercode,
      maxTemp: data.daily.temperature_2m_max[0],
      minTemp: data.daily.temperature_2m_min[0],
    };
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    } else {
      toast.error("An unknown error occurred.");
    }
  }
}

async function getForecast(coords: { lat: string; lon: string } | null) {
  const defaultCoords = { lat: "37.7749", lon: "122.4194" };
  const usedCoords = coords ? coords : defaultCoords;
  try {
    const res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${usedCoords.lat}&longitude=${usedCoords.lon}&daily=weathercode,temperature_2m_mean&forecast_days=16&timezone=auto`
    );
    const data = await res.data.daily;
    return data;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    } else {
      toast.error("An unknown error occurred.");
    }
  }
}

// ----------------------------------------------------------------------------

type ClimateApiResponse = {
  daily: {
    time: string[];
    temperature_2m_mean: number[];
  };
};

function calculateMonthlyAverages(data: ClimateApiResponse) {
  const { time, temperature_2m_mean } = data.daily;

  const monthlyGroups: Record<string, number[]> = {};

  time.forEach((dateStr, i) => {
    const monthKey = dateStr.slice(0, 7);
    const temp = temperature_2m_mean[i];

    if (!monthlyGroups[monthKey]) {
      monthlyGroups[monthKey] = [];
    }
    if (typeof temp === "number") {
      monthlyGroups[monthKey].push(temp);
    }
  });

  const monthlyMeans: Record<string, number> = {};

  for (const [month, temps] of Object.entries(monthlyGroups)) {
    const sum = temps.reduce((a, b) => a + b, 0);
    const avg = sum / temps.length;
    monthlyMeans[month] = parseFloat(avg.toFixed(1));
  }

  return monthlyMeans;
}

async function getMonthMean(coords: { lat: string; lon: string } | null) {
  const defaultCoords = { lat: "37.7749", lon: "122.4194" };
  const usedCoords = coords ? coords : defaultCoords;
  try {
    const res = await axios.get(
      `https://climate-api.open-meteo.com/v1/climate?latitude=${usedCoords.lat}&longitude=${usedCoords.lon}&start_date=2024-01-01&end_date=2024-12-31&daily=temperature_2m_mean`
    );
    const data = calculateMonthlyAverages(res.data);

    return data;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    } else {
      toast.error("An unknown error occurred.");
    }
  }
}

export { getForecast, getTodayWeather, getMonthMean };
