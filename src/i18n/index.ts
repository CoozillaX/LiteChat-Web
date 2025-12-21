import i18n, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enUS from "./locales/en-us";
import zhCN from "./locales/zh-cn";
import { store } from "@/state/store";
import { setLanguage } from "@/views/App/slice";

const resources = {
  "en-us": { translation: enUS },
  "zh-cn": { translation: zhCN }
} as const satisfies Resource;

export type SupportedLang = keyof typeof resources;

export const supportedLanguages = Object.keys(resources) as SupportedLang[];

export function changeLanguage(lng: string) {
  if (supportedLanguages.includes(lng as SupportedLang)) {
    i18n.changeLanguage(lng);
    store.dispatch(setLanguage(lng));
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lowerCaseLng: true,
    supportedLngs: supportedLanguages,
    fallbackLng: "en-us",
    interpolation: { escapeValue: false }
  });

export default i18n;
export * from "./keys";
