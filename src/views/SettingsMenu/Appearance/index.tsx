import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";
import { I18nKeys } from "@/i18n";
import { useStore } from "@/state/hooks";
import { setDarkModeFollowSystem, setDarkModeEnabled } from "@/views/App/slice";
import { store } from "@/state/store";

export default function Index() {
  const { t } = useTranslation();
  const darkMode = useStore(({ app }) => app.darkMode);

  // Define appearance option groups
  const optionGroups: SettingMenuGroup[] = useMemo(
    (): SettingMenuGroup[] => [
      {
        header: t(I18nKeys.settings.appearance.theme.title),
        items: [
          ...(!darkMode.followSystem
            ? [
                {
                  type: SettingMenuItemType.Switch,
                  label: t(I18nKeys.settings.appearance.theme.darkMode),
                  value: darkMode.enabled,
                  onChange: (value: boolean) => {
                    store.dispatch(setDarkModeEnabled(value));
                  }
                }
              ]
            : []),
          {
            type: SettingMenuItemType.Switch,
            label: t(I18nKeys.settings.appearance.theme.autoDarkMode),
            value: darkMode.followSystem,
            onChange: (value) => {
              store.dispatch(setDarkModeFollowSystem(value));
            }
          }
        ]
      }
    ],
    [darkMode]
  );

  return <SettingMenu groups={optionGroups} />;
}
