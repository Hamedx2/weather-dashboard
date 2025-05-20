import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface WeatherProviderType {
  mode: "light" | "dark";
  language: "en" | "per";
  name: string;
  logout: boolean;
  handleSetMode: (value: "light" | "dark") => void;
  handleSetLanguage: (value: "en" | "per") => void;
  handleSetName: (value: string) => void;
  handleLogout: () => void;
  setLogout: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<WeatherProviderType | null>(null);

function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"en" | "per">("en");
  const [name, setName] = useState<string>("");
  const [logout, setLogout] = useState(false);

  const { i18n } = useTranslation();

  useEffect(
    function () {
      if (language === "per") document.body.dir = "rtl";
      if (language === "en") document.body.dir = "ltr";
    },
    [language]
  );

  useEffect(
    function () {
      i18n.changeLanguage(language);
    },
    [language, i18n]
  );

  function handleSetMode(value: "light" | "dark") {
    setMode(value);
  }

  function handleSetLanguage(value: "en" | "per") {
    setLanguage(value);
  }

  function handleSetName(value: string) {
    setName(value);
  }

  function handleLogout() {
    setLogout(true);
    setName("");
  }

  const contextValues = {
    mode,
    handleSetMode,
    language,
    handleSetLanguage,
    name,
    handleSetName,
    logout,
    handleLogout,
    setLogout,
  };

  return (
    <LoginContext.Provider value={contextValues}>
      {children}
    </LoginContext.Provider>
  );
}

function useWeather() {
  const context = useContext(LoginContext);
  if (context === undefined)
    throw new Error(
      "useWeather has been used outside of the WeatherProvider component"
    );
  return context;
}

export { WeatherProvider, useWeather };
