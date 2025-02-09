import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Detect user language
import translation_en from "./locales/en/translation.json";
import translation_pl from "./locales/pl/translation.json";

const resources = {
  en: {
      translation: translation_en
  },
  pl: {
    translation: translation_pl
  },
};

i18n
  .use(LanguageDetector) // Bind react-i18next
  .use(initReactI18next) // Bind react-i18next
  .init({
    resources,
    fallbackLng: "pl", // Default language
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;