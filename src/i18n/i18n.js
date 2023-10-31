import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translate nav bar
import translationNavbar from "../languages/translationNavbar";
import translationHome from "../languages/translationHome";
import translationAchievements from "../languages/translationAchievements";
import translationContact from "../languages/translationContact";
import translationContributors from "../languages/translationContributors";
import translationBlog from "../languages/translationBlog";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationNavbar.en,
      translationHome: translationHome.en,
      translationAchievements: translationAchievements.en,
      translationContact: translationContact.en,
      translationContributors: translationContributors.en,
      translationBlog: translationBlog.en,
    },
    vi: {
      translation: translationNavbar.vi,
      translationHome: translationHome.vi,
      translationAchievements: translationAchievements.vi,
      translationContact: translationContact.vi,
      translationContributors: translationContributors.vi,
      translationBlog: translationBlog.vi,
    },
    fr: {
      translation: translationNavbar.fr,
      translationHome: translationHome.fr,
      translationAchievements: translationAchievements.fr,
      translationContact: translationContact.fr,
      translationContributors: translationContributors.fr,
      translationBlog: translationBlog.fr,
    },
    ja: {
      translation: translationNavbar.ja,
      translationHome: translationHome.ja,
      translationAchievements: translationAchievements.ja,
      translationContact: translationContact.ja,
      translationContributors: translationContributors.ja,
      translationBlog: translationBlog.ja,
    },
  },
  lng: "en",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
