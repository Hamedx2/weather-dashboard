import { createContext, useContext, useEffect, useState } from "react";
import {
  getForecast,
  getMonthMean,
  getTodayWeather,
} from "../helpers/weatherApi";

interface DashboardBodyProviderType {
  location: {
    name: string;
    lat: string;
    lon: string;
    value: string;
  };
  handleSetLocation: (value: {
    name: string;
    lat: string;
    lon: string;
    value: string;
  }) => void;
  weather: {
    currentTemp?: number;
    feelsLike?: number;
    weatherCode?: number;
    maxTemp?: number;
    minTemp?: number;
  };
  weatherForecast: {
    time?: object;
    weathercode?: object;
    temperature_2m_mean?: object;
  };
  weatherMonth: { [key: string]: number };
}

const DashboardContext = createContext<DashboardBodyProviderType | null>(null);

function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState({
    name: "",
    lat: "",
    lon: "",
    value: "",
  });
  const [weather, setWeather] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});
  const [weatherMonth, setWeatherMonth] = useState<Record<string, number>>({});

  function handleSetLocation(value: {
    name: string;
    lat: string;
    lon: string;
    value: string;
  }) {
    setLocation(value);
  }

  useEffect(
    function () {
      async function getWeatherInfo() {
        const weatherInfo = await getTodayWeather({
          lat: location.lat,
          lon: location.lon,
        });
        const forecastInfo = await getForecast({
          lat: location.lat,
          lon: location.lon,
        });
        const monthInfo = await getMonthMean({
          lat: location.lat,
          lon: location.lon,
        });
        setWeather(weatherInfo as typeof weather);
        setWeatherForecast(forecastInfo);
        setWeatherMonth(monthInfo ?? {});
      }

      if (location.name !== "") {
        getWeatherInfo();
      }
    },
    [location]
  );

  const contextValues = {
    location,
    handleSetLocation,
    weather,
    weatherForecast,
    weatherMonth,
  };

  return (
    <DashboardContext.Provider value={contextValues}>
      {children}
    </DashboardContext.Provider>
  );
}

function useGetLocation() {
  const context = useContext(DashboardContext);
  if (context === undefined)
    throw new Error(
      "useLocation has been used outside of the LocationProvider component"
    );
  return context;
}

export { LocationProvider, useGetLocation };
