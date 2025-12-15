import { Navigate, Route } from "react-router-dom";
import Profile from "@/views/SettingsMenu/Profile";
import Appearance from "@/views/SettingsMenu/Appearance";
import Language from "@/views/SettingsMenu/Language";
import SettingLayout from "@/layout/SettingLayout";
import { I18nKeys } from "@/i18n";

export const SettingRoutes = (
  <Route path="settings" element={<SettingLayout />}>
    <Route index handle={{ isEmptyPage: true }} />
    <Route
      path="profile"
      element={<Profile />}
      handle={{ titleI18nKey: I18nKeys.settings.profile.title }}
    />
    <Route
      path="appearance"
      element={<Appearance />}
      handle={{ titleI18nKey: I18nKeys.settings.appearance.title }}
    />
    <Route
      path="language"
      element={<Language />}
      handle={{ titleI18nKey: I18nKeys.settings.language.title }}
    />
    <Route path="*" element={<Navigate to=".." replace />} />
  </Route>
);
