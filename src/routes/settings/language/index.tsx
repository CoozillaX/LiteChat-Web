import { Route } from "react-router-dom";
import { I18nKeys } from "@/i18n";
import Language from "@/views/SettingsMenu/Language";

const LanguageRoutes = (
  <Route
    path="language"
    element={<Language />}
    handle={{ titleI18nKey: I18nKeys.settings.language.title }}
  />
);

export default LanguageRoutes;
