import { Route } from "react-router-dom";
import { I18nKeys } from "@/i18n";
import Avatar from "@/views/SettingsMenu/Profile/Avatar";

const AvatarRoutes = (
  <Route
    path="avatar"
    element={<Avatar />}
    handle={{ titleI18nKey: I18nKeys.settings.profile.avatar.title }}
  />
);

export default AvatarRoutes;
