import { Navigate, Route } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { ContactRoutes } from "./ContactRoutes";
import { ChatRoutes } from "./ChatRoutes";
import { SettingRoutes } from "./SettingRoutes";

export const MainRoutes = (
  <Route path="/" element={<MainLayout />}>
    <Route index handle={{ isEmptyPage: true }} />
    {ContactRoutes}
    {ChatRoutes}
    {SettingRoutes}
    <Route path="*" element={<Navigate to=".." replace />} />
  </Route>
);
