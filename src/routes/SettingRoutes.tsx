import { Route } from "react-router-dom";
import AppearancePage from "@/views/Appearance";
import SettingLayout from "@/layout/SettingLayout";

export const SettingRoutes = (
  <Route path="settings" element={<SettingLayout />}>
    <Route path="appearance" element={<AppearancePage />} />
  </Route>
);
