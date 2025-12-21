import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Brush } from "@mui/icons-material";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";
import { I18nKeys } from "@/i18n";
import { useStore } from "@/state/hooks";
import { toggleDarkMode } from "@/views/App/slice";
import { store } from "@/state/store";

export default function Index() {
  const { t } = useTranslation();
  const darkMode = useStore(({ app }) => app.darkMode);

  // Define appearance option groups
  const optionGroups: SettingMenuGroup[] = useMemo(
    (): SettingMenuGroup[] => [
      {
        items: [
          {
            type: SettingMenuItemType.Switch,
            label: t(I18nKeys.settings.appearance.darkMode),
            icon: <Brush fontSize="small" />,
            value: darkMode,
            onChange: () => {
              store.dispatch(toggleDarkMode());
            }
          }
        ]
      }
    ],
    [darkMode]
  );

  return <SettingMenu groups={optionGroups} />;
}
