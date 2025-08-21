import i18next from "./i18n.js";
export const translate = async (key, lang = "tel") => {
  await i18next.changeLanguage(lang);
  return i18next.t(key);
};
