import { Route } from "react-router-dom";
import { I18nKeys } from "@/i18n";
import Appearance from "@/views/SettingsMenu/Appearance";

const AppearanceRoutes = (
  <Route
    path="appearance"
    element={<Appearance />}
    handle={{ titleI18nKey: I18nKeys.settings.appearance.title }}
  />
);

export default AppearanceRoutes;
