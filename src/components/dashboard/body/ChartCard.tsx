import { Box, Stack, Typography, useTheme } from "@mui/material";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useWeather } from "../../../utils/contexts/WeatherContext";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import { useGetLocation } from "../../../utils/contexts/DashboardBodyContext";

function ChartCard() {
  const weatherContext = useWeather();
  const language = weatherContext?.language;
  const { t } = useTranslation();
  const theme = useTheme();

  const defaultWeather = useLoaderData().monthMean;
  const locationContext = useGetLocation();
  const weatherMonth = locationContext?.weatherMonth;
  const weatherData =
    weatherMonth && Object.keys(weatherMonth).length !== 0
      ? weatherMonth
      : defaultWeather;

  const monthTemps = Object.values(weatherData);

  const monthlyTempsEn = [
    { name: "Jan", temp: monthTemps[0] },
    { name: "Feb", temp: monthTemps[1] },
    { name: "Mar", temp: monthTemps[2] },
    { name: "Apr", temp: monthTemps[3] },
    { name: "May", temp: monthTemps[4] },
    { name: "Jun", temp: monthTemps[5] },
    { name: "Jul", temp: monthTemps[6] },
    { name: "Aug", temp: monthTemps[7] },
    { name: "Sep", temp: monthTemps[8] },
    { name: "Oct", temp: monthTemps[9] },
    { name: "Nov", temp: monthTemps[10] },
    { name: "Dec", temp: monthTemps[11] },
  ];
  const monthlyTempsPer = [
    { name: "فروردین", temp: monthTemps[4] },
    { name: "اردیبهشت", temp: monthTemps[5] },
    { name: "خرداد", temp: monthTemps[6] },
    { name: "تیر", temp: monthTemps[7] },
    { name: "مرداد", temp: monthTemps[8] },
    { name: "شهریور", temp: monthTemps[9] },
    { name: "مهر", temp: monthTemps[10] },
    { name: "آبان", temp: monthTemps[11] },
    { name: "آذر", temp: monthTemps[0] },
    { name: "دی", temp: monthTemps[1] },
    { name: "بهمن", temp: monthTemps[2] },
    { name: "اسفند", temp: monthTemps[3] },
  ];

  const monthlyTemps = language === "per" ? monthlyTempsPer : monthlyTempsEn;

  return (
    <Stack
      style={{ padding: "10px 40px" }}
      width="100%"
      height="100%"
      direction="column"
      alignItems="flex-start"
      spacing={3}
      justifyContent="space-between"
    >
      <Typography color="text.primary" variant="h5">
        {t("dashboard.body.chartCard.header")}
      </Typography>
      <Box
        width="100%"
        height="100%"
        alignSelf="flex-start"
        color="text.primary"
      >
        <ResponsiveContainer>
          <AreaChart
            data={monthlyTemps}
            margin={{
              top: 10,
              right: 40,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4CDFE8" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#7947F7" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="tempLineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4CDFE8" stopOpacity={1} />
                <stop offset="100%" stopColor="#7947F7" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme.palette.text.chart}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme.palette.text.chart }}
            />
            <YAxis
              ticks={[0, 10, 20, 30, 40]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme.palette.text.chart,
                textAnchor: language === "per" ? "center" : "end",
              }}
              tickFormatter={(value) => `${value}°C`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 8,
                border: "none",
                boxShadow: theme.shadows[2],
                color: theme.palette.text.primary,
                fontWeight: 500,
                fontSize: 14,
              }}
              itemStyle={{
                color: theme.palette.text.primary,
                fontWeight: 500,
                fontSize: 14,
              }}
              labelStyle={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                fontSize: 13,
              }}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="url(#tempLineGradient)"
              fill="url(#tempGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Stack>
  );
}

export default ChartCard;
