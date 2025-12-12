import { Route } from "react-router-dom";
import Appearance from "@/views/Settings/Appearance";
import Language from "@/views/Settings/Language";
import SettingLayout from "@/layout/SettingLayout";

export const SettingRoutes = (
  <Route path="settings" element={<SettingLayout />}>
    <Route path="appearance" element={<Appearance />} />
    <Route path="language" element={<Language />} />
  </Route>
);
