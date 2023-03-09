import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

export const initI18n = () => {
  i18n.use(initReactI18next).init({
    debug: process.env.NODE_ENV === "development",
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false, // React escapes by default
    },
  });
};
