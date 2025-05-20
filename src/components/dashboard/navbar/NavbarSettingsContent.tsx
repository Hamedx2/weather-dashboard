import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import NavbarSettingsSection from "./NavbarSettingsSection";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { useWeather } from "../../../utils/contexts/WeatherContext";
import toast from "react-hot-toast";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

function NavbarSettingsContent() {
  const weatherContext = useWeather();
  const mode = weatherContext?.mode || "light";
  const language = weatherContext?.language || "en";
  const handleSetLanguage = weatherContext?.handleSetLanguage || (() => {});
  const handleSetMode = weatherContext?.handleSetMode || (() => {});
  const handleLogout = weatherContext?.handleLogout || (() => {});
  const { t } = useTranslation();

  function handleSetLightMode() {
    handleSetMode("light");
  }
  function handleSetDarkMode() {
    handleSetMode("dark");
  }
  function handleSetPer() {
    handleSetLanguage("per");
  }
  function handleSetEn() {
    handleSetLanguage("en");
  }

  function handleLogoutBtn() {
    toast(
      (tos) => (
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.primary",
              fontSize: "16px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {t("logoutQuestion")}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={() => {
                handleLogout();
                toast.dismiss(tos.id);
              }}
            >
              {t("logoutSubmit")}
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                toast.dismiss(tos.id);
              }}
            >
              {t("logoutCancel")}
            </Button>
          </Stack>
        </Stack>
      ),
      {
        icon: (
          <WarningRoundedIcon
            sx={{
              color: "text.primary",
              fontSize: "3rem",
            }}
          />
        ),
        style: {
          backgroundColor: mode === "light" ? "#E1E9EE" : "#292F45",
        },
      }
    );
  }

  const settingItems = t("dashboard.navbar.settings", {
    returnObjects: true,
  }) as {
    modeHeader: string;
    modeLightBtn: string;
    modeDarkBtn: string;
    languageHeader: string;
    languagePerBtn: string;
    languageEnBtn: string;
  };

  return (
    <Box px={2} py={1} position="relative">
      <NavbarSettingsSection
        header={settingItems.modeHeader}
        btn1text={settingItems.modeLightBtn}
        btn2text={settingItems.modeDarkBtn}
        btn1icon={<LightModeIcon />}
        btn2icon={<DarkModeIcon />}
        handleBtn1Click={handleSetLightMode}
        handleBtn2Click={handleSetDarkMode}
        activeBtn={mode === "light" ? 1 : 2}
      />
      <NavbarSettingsSection
        header={settingItems.languageHeader}
        btn1text={settingItems.languagePerBtn}
        btn2text={settingItems.languageEnBtn}
        btn1icon={null}
        btn2icon={null}
        handleBtn1Click={handleSetPer}
        handleBtn2Click={handleSetEn}
        activeBtn={language === "per" ? 1 : 2}
      />
      <Button
        variant="text"
        startIcon={<LogoutIcon />}
        sx={{
          paddingTop: 1,
          color: "text.primary",
        }}
        onClick={handleLogoutBtn}
      >
        Exit
      </Button>
    </Box>
  );
}

export default NavbarSettingsContent;
