import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enUS from "./locales/en-us";
import zhCN from "./locales/zh-cn";

const resources = {
  "en-us": { translation: enUS },
  "zh-cn": { translation: zhCN }
} as const;

export type SupportedLang = keyof typeof resources;

export const supportedLanguages = Object.keys(resources) as SupportedLang[];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lowerCaseLng: true,
    lng: localStorage.getItem("litechat-lang") || undefined,
    supportedLngs: supportedLanguages,
    fallbackLng: "en-us",
    interpolation: { escapeValue: false }
  });

export default i18n;
