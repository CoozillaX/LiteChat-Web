import { Route } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { SettingRoutes } from "@/routes/SettingRoutes";

export const MainRoutes = (
  <Route path="/" element={<MainLayout />}>
    { SettingRoutes }
  </Route>
);
