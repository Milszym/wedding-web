import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Load translations from a server
import LanguageDetector from "i18next-browser-languagedetector"; // Detect user language

i18n
  .use(Backend) // Load translation files
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Bind react-i18next
  .init({
    fallbackLng: "pl", // Default language
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;