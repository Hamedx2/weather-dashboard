import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Outlet, useNavigation } from "react-router";
import { lightPalette, darkPalette } from "../utils/theme/theme";
import { useWeather } from "../utils/contexts/WeatherContext";
import { CacheProvider } from "@emotion/react";
import {
  createEmotionCache,
  createEmotionCacheLtr,
} from "../utils/rtl/emotionCache";
import { Toaster } from "react-hot-toast";
import Spinner from "../components/dashboard/Spinner";

function Layout() {
  const navigation = useNavigation();
  const weatherContext = useWeather();
  const mode: "light" | "dark" = weatherContext?.mode || "light";
  const language: "en" | "per" = weatherContext?.language || "en";

  const theme = createTheme({
    direction: language === "en" ? "ltr" : "rtl",
    typography: {
      fontFamily:
        language === "en"
          ? '"Roboto", "Helvetica", "Arial", sans-serif'
          : "Vazir, Roboto, Arial",
    },
    palette: {
      mode,
      background:
        mode === "light" ? lightPalette.background : darkPalette.background,
      text: mode === "light" ? lightPalette.text : darkPalette.text,
    },
  });

  const cacheRtl = createEmotionCache();

  const cacheLtr = createEmotionCacheLtr();

  if (navigation.state === "loading") return <Spinner />;

  return (
    <CacheProvider value={language === "per" ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <Box bgcolor="background.page">
          <Toaster />
          <Outlet />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Layout;
