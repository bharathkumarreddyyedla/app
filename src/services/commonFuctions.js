import i18next from "./i18n.js";
export const translate = async (key, lang = "tel") => {
  await i18next.changeLanguage(lang);
  return i18next.t(key);
};
export const getMimeTypeFromUri = (uriOrBase64) => {
  if (!uriOrBase64) return "image/jpeg";

  // Case 1: Base64 with data prefix
  const match = uriOrBase64.match(/^data:(.*?);base64,/);
  if (match) return match[1];

  // Case 2: URI or file path
  const ext = uriOrBase64.split(".").pop().toLowerCase();
  const map = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    heic: "image/heic",
    heif: "image/heif",
  };
  return map[ext] || "image/jpeg";
};
