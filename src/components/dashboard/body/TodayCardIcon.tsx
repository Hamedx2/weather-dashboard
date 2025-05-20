import { Box, Stack, Typography } from "@mui/material";
import { useLoaderData } from "react-router";
import { useWeather } from "../../../utils/contexts/WeatherContext";
import { useTranslation } from "react-i18next";
import {
  weatherCodeDescriptions,
  weatherCodeDescriptionsPer,
} from "../../../utils/helpers/getWeatherCondition";
import { useGetLocation } from "../../../utils/contexts/DashboardBodyContext";

function TodayCardIcon() {
  const weatherContext = useWeather();
  const language = weatherContext?.language || "en";
  const { t } = useTranslation();

  const data = useLoaderData();
  const locationContext = useGetLocation();
  const location = locationContext?.location;
  const locationWeather = locationContext?.weather;
  const defaultTodayWeather = data.todayWeather;

  const todayWeather =
    location?.lat === "" ? defaultTodayWeather : locationWeather;

  const icon = `/images/dashboard/icons/${
    weatherCodeDescriptions[
      String(todayWeather.weatherCode) as keyof typeof weatherCodeDescriptions
    ]
  }.png`;
  const feelsLike = Math.floor(todayWeather.feelsLike);
  const weatherName =
    language === "en"
      ? weatherCodeDescriptions[
          String(
            todayWeather.weatherCode
          ) as keyof typeof weatherCodeDescriptions
        ]
      : weatherCodeDescriptionsPer[
          String(
            todayWeather.weatherCode
          ) as keyof typeof weatherCodeDescriptions
        ];

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      width="180px"
      px={2}
    >
      <Box
        component="img"
        alt="weather condition image"
        src={icon}
        width="90%"
      />
      <Typography variant="h4">{weatherName}</Typography>
      <Typography>{`${language === "per" ? feelsLike : ""} ${t(
        "dashboard.body.todayCard.feels"
      )} ${language === "en" ? feelsLike : ""}`}</Typography>
    </Stack>
  );
}

export default TodayCardIcon;
