import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useWeather } from "../../../utils/contexts/WeatherContext";
import NavbarSelect from "./NavbarSelect";
import NavbarSettings from "./NavbarSettings";

function Navbar() {
  const weatherContext = useWeather();
  const mode = weatherContext?.mode || "light";
  const { t } = useTranslation();
  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: "background.page",
        boxShadow: `0 0 5px 5px ${
          mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(150, 150, 150, 0.1)"
        }`,
      }}
    >
      <Toolbar sx={{ backgroundColor: "background.page" }}>
        <IconButton size="small" edge="start">
          <Box
            component="img"
            alt="website Logo"
            src="/images/dashboard/logo.png"
            sx={{
              width: "56px",
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <Typography
          component="h2"
          variant="subtitle2"
          color="text.primary"
          px="10px"
          sx={{ flexGrow: "1" }}
        >
          {t("dashboard.navbar.title")}
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavbarSelect />
          <NavbarSettings />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
