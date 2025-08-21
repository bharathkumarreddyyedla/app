import i18next from "i18next";
import Backend from "i18next-fs-backend";

await i18next.use(Backend).init({
  lng: "en",
  fallbackLng: "en",
  backend: {
    loadPath: "./src/services/locales/{{lng}}.json", // Path to translation files
  },
  interpolation: {
    escapeValue: false, // No need to escape values
  },
});

export default i18next;
