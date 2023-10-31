import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translate nav bar
import translationNavbar from "../languages/translationNavbar";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationNavbar.en,
    },
    vi: {
      translation: translationNavbar.vi,
    },
    fr: {
      translation: translationNavbar.fr,
    },
    ja: {
      translation: translationNavbar.ja,
    },
  },
  lng: "en",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
