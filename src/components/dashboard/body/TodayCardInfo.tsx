import { Stack, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useWeather } from "../../../utils/contexts/WeatherContext";
import { enDate, perDate } from "../../../utils/helpers/date";
import { useLoaderData } from "react-router";
import { useTranslation } from "react-i18next";
import { useGetLocation } from "../../../utils/contexts/DashboardBodyContext";

function TodayCardInfo() {
  const { t } = useTranslation();

  const weatherContext = useWeather();
  const language = weatherContext?.language || "en";
  const date = language === "en" ? enDate(true) : perDate();
  const data = useLoaderData();
  const defaultTodayWeather = data.todayWeather;
  const locationContext = useGetLocation();
  const location = locationContext?.location;
  const locationWeather = locationContext?.weather;

  const todayWeather =
    location?.lat === "" ? defaultTodayWeather : locationWeather;

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      height="100%"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        sx={{
          width: "173px",
          height: "40px",
          borderRadius: "50px",
        }}
        bgcolor="background.weatherCard"
        color="text.badge"
      >
        <LocationOnRoundedIcon fontSize="small" />
        <Typography
          variant="subtitle2"
          fontSize="medium"
          sx={{ textTransform: "capitalize" }}
        >
          {location?.lat === ""
            ? "San Francisco"
            : location?.name ?? "San Francisco"}
        </Typography>
      </Stack>
      <Stack direction="column" alignItems="flex-start" justifyContent="center">
        <Typography variant="h4" fontWeight="500" sx={{}}>
          {date.weekday}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>{`${date.day} ${date.month}, ${date.year}`}</Typography>
          <Typography>{`${date.time}`}</Typography>
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="flex-start" justifyContent="center">
        <Typography variant="h4" fontWeight="500">
          {`${Math.floor(todayWeather.currentTemp)}°C`}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>{`${t("dashboard.body.todayCard.high")}:${Math.floor(
            todayWeather.maxTemp
          )}`}</Typography>
          <Typography>{`${t("dashboard.body.todayCard.low")}:${Math.floor(
            todayWeather.minTemp
          )}`}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TodayCardInfo;
