import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useWeather } from "../../utils/contexts/WeatherContext";

import toast from "react-hot-toast";

function LoginForm() {
  const { t } = useTranslation();
  const [name, setName] = useState("");

  const weatherContext = useWeather();
  const handleSubmitName = weatherContext?.handleSetName || (() => {});

  const logout = weatherContext?.logout;

  useEffect(
    function () {
      if (logout) {
        toast.success(t("logout"), {
          style: {
            borderRadius: "10px",
            padding: "20px 40px",
            fontSize: "18px",
            fontWeight: "500",
          },
        });
      }
      const setLogout = weatherContext?.setLogout || (() => {});
      setLogout(() => false);
    },
    [logout, weatherContext, t]
  );

  function handleSetName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleClick() {
    if (name !== "") handleSubmitName(name);
    else
      toast.error(t("emptyName"), {
        style: {
          borderRadius: "10px",
          padding: "20px 40px",
          fontSize: "18px",
          fontWeight: "500",
        },
      });
  }

  return (
    <Box sx={{ display: "grid" }}>
      <Box
        sx={{
          margin: "auto",
          height: "70%",
          position: "relative",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "2rem",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight="700"
          color="text.primary"
        >
          {t("login.loginHeader")}
        </Typography>

        <TextField
          label={t("login.loginInputPlaceholder")}
          size="small"
          fullWidth
          value={name}
          onChange={handleSetName}
        />

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "0",
          }}
          fullWidth
          onClick={handleClick}
        >
          {t("login.loginBtnText")}
        </Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
