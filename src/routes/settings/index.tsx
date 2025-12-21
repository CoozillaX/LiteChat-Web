import { Route } from "react-router-dom";
import SettingLayout from "@/layouts/SettingLayout";
import { SettingMenuProvider } from "@/contexts/SettingMenuContext";
import ProfileRoute from "./profile";
import AppearanceRoute from "./appearance";
import LanguageRoute from "./language";

const SettingRoutes = (
  <Route
    path="settings"
    element={
      <SettingMenuProvider>
        <SettingLayout />
      </SettingMenuProvider>
    }
  >
    <Route index handle={{ isEmptyPage: true }} element={<></>} />
    {ProfileRoute}
    {AppearanceRoute}
    {LanguageRoute}
  </Route>
);

export default SettingRoutes;
