import { Stack, Typography } from "@mui/material";
import WeatherCard from "./WeatherCard";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import { weatherCodeDescriptions } from "../../../utils/helpers/getWeatherCondition";
import { getWeekday } from "../../../utils/helpers/date";
import { useWeather } from "../../../utils/contexts/WeatherContext";
import { useGetLocation } from "../../../utils/contexts/DashboardBodyContext";

const persianWeekdays = {
  Sat: "شنبه",
  Sun: "یک شنبه",
  Mon: "دوشنبه",
  Tue: "سه‌ شنبه",
  Wed: "چهارشنبه",
  Thu: "پنج‌ شنبه",
  Fri: "جمعه",
};

function ForecastCard() {
  const { t } = useTranslation();
  const weatherContex = useWeather();
  const language = weatherContex?.language || "en";

  const locationContext = useGetLocation();
  const locationForecast = locationContext?.weatherForecast;
  const defaultForecast = useLoaderData().forecastData;

  const forecastData = locationForecast?.time
    ? locationForecast
    : defaultForecast;
  const weatherCodes = forecastData.weathercode;
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      spacing={3}
      sx={{
        margin: "0 auto",
        padding: "20px 30px",
      }}
    >
      <Typography variant="h5">
        {t("dashboard.body.forecastCard.header")}
      </Typography>
      <Stack direction="row" spacing={3} paddingRight="30px">
        {forecastData.time.map((day: string, i: number) => (
          <WeatherCard
            key={day}
            day={
              i === 0
                ? t("dashboard.body.forecastCard.today")
                : language === "per"
                ? persianWeekdays[
                    getWeekday(day) as keyof typeof persianWeekdays
                  ]
                : getWeekday(day)
            }
            iconName={
              weatherCodeDescriptions[
                weatherCodes[i] as keyof typeof weatherCodeDescriptions
              ] || "clear"
            }
            degree={Math.floor(forecastData.temperature_2m_mean[i])}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default ForecastCard;
