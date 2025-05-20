import { Icon, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { enDate, perDate } from "../../../utils/helpers/date";
import { useWeather } from "../../../utils/contexts/WeatherContext";

function FooterDate() {
  const weatherContext = useWeather();
  const language = weatherContext?.language || "en";

  const date = language === "per" ? perDate() : enDate(false);

  const dateString = `${date.time} , ${date.weekday} ${date.day} ${date.month} ${date.year}`;

  return (
    <Stack
      direction="row"
      color="text.primary"
      alignItems="center"
      spacing={0.5}
      sx={{ color: "text.primary" }}
      fontSize="small"
    >
      <Icon>
        <CalendarMonthIcon />
      </Icon>
      <Typography variant="subtitle1" fontSize="small">
        {dateString}
      </Typography>
    </Stack>
  );
}

export default FooterDate;
