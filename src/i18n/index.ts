import i18n, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enUS from "./locales/en-us";
import zhCN from "./locales/zh-cn";

const resources = {
  "en-us": { translation: enUS },
  "zh-cn": { translation: zhCN }
} as const satisfies Resource;

export type SupportedLang = keyof typeof resources;

export const supportedLanguages = Object.keys(resources) as SupportedLang[];

export function changeLanguage(lng: string) {
  if (supportedLanguages.includes(lng as SupportedLang)) {
    i18n.changeLanguage(lng);
    localStorage.setItem("litechat-lang", lng);
  }
}

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
export * from "./keys";
