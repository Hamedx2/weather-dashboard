import i18n from "i18next";
import en from "./en.json";
import per from "./per.json";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en,
    per,
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
