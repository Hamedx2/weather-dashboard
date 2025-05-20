import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useWeather } from "../../utils/contexts/WeatherContext";

function LoginLanguageSelect() {
  const [language, setLanguage] = useState<"en" | "per">("en");
  const weatherContext = useWeather();
  const handleSetLanguage = weatherContext?.handleSetLanguage;

  function handleSetLang(event: React.ChangeEvent<HTMLInputElement>) {
    setLanguage(event.target.value as "en" | "per");
    if (handleSetLanguage) {
      handleSetLanguage(event.target.value as "en" | "per");
    }
  }

  const { t } = useTranslation();

  return (
    <TextField
      variant="standard"
      select
      label={t("login.textFieldLabel")}
      value={language}
      onChange={handleSetLang}
      size="small"
      sx={{
        width: "300px",
      }}
    >
      <MenuItem value="en">{t("login.englishOption")}</MenuItem>
      <MenuItem value="per">{t("login.persianOption")}</MenuItem>
    </TextField>
  );
}

export default LoginLanguageSelect;
