import { Box, Grid, Paper } from "@mui/material";
import TodayCard from "./TodayCard";
import {
  getForecast,
  getMonthMean,
  getTodayWeather,
} from "../../../utils/helpers/weatherApi";
import ForecastCard from "./ForecastCard";
import ChartCard from "./ChartCard";

function DashboardBody() {
  return (
    <Box sx={{ maxWidth: "95%", margin: "auto", padding: "30px 0 80px" }}>
      <Grid container columnSpacing={5} rowSpacing={3}>
        <Grid size={5}>
          <Paper
            sx={{
              borderRadius: "24px",
              height: "234px",
              backgroundColor: "background.card",
            }}
          >
            <TodayCard />
          </Paper>
        </Grid>
        <Grid size={7}>
          <Paper
            sx={{
              borderRadius: "24px",
              height: "234px",
              backgroundColor: "background.card",
            }}
          >
            <ChartCard />
          </Paper>
        </Grid>
        <Grid size={12}>
          <Paper
            sx={{
              borderRadius: "24px",
              height: "381px",
              backgroundColor: "background.card",
              overflow: "scroll",
            }}
          >
            <ForecastCard />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardBody;

export async function loader() {
  const forecastData = await getForecast(null);
  const todayWeather = await getTodayWeather(null);
  const monthMean = await getMonthMean(null);
  return { forecastData, todayWeather, monthMean };
}
