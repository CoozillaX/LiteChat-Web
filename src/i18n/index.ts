import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-us";
import zhCN from "./locales/zh-cn";

const resources = {
  "en-us": { translation: enUS },
  "zh-cn": { translation: zhCN }
} as const;

i18n.use(initReactI18next).init({
  resources,
  lowerCaseLng: true,
  lng: localStorage.getItem("litechat-lang") || undefined,
  fallbackLng: "en-us",
  interpolation: { escapeValue: false }
});

export type SupportedLang = keyof typeof resources;

export const supportedLanguages = Object.keys(resources) as SupportedLang[];

export default i18n;
