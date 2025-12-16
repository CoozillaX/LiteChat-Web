import { Route } from "react-router-dom";
import { I18nKeys } from "@/i18n";
import Profile from "@/views/SettingsMenu/Profile";
import AvatarRoutes from "./avatar";

const ProfileRoutes = (
  <Route path="profile">
    <Route
      index
      element={<Profile />}
      handle={{ titleI18nKey: I18nKeys.settings.profile.title }}
    />
    {AvatarRoutes}
  </Route>
);

export default ProfileRoutes;
