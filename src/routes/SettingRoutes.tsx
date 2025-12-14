import { Navigate, Route } from "react-router-dom";
import Appearance from "@/views/SettingsMenu/Appearance";
import Language from "@/views/SettingsMenu/Language";
import SettingLayout from "@/layout/SettingLayout";

export const SettingRoutes = (
  <Route path="settings" element={<SettingLayout />}>
    <Route index handle={{ isEmptyPage: true }} />
    <Route
      path="appearance"
      element={<Appearance />}
      handle={{ title: "Appearance" }}
    />
    <Route
      path="language"
      element={<Language />}
      handle={{ title: "Language" }}
    />
    <Route path="*" element={<Navigate to=".." replace />} />
  </Route>
);
