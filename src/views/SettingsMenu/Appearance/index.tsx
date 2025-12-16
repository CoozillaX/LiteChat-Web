import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Brush } from "@mui/icons-material";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";
import { useThemeMode } from "@/contexts";
import { I18nKeys } from "@/i18n";

export default function Index() {
  const { t } = useTranslation();
  const { themeMode, toggleThemeMode } = useThemeMode();

  // Define appearance option groups
  const optionGroups: SettingMenuGroup[] = useMemo(
    (): SettingMenuGroup[] => [
      {
        items: [
          {
            type: SettingMenuItemType.Switch,
            label: t(I18nKeys.settings.appearance.darkMode),
            icon: <Brush fontSize="small" />,
            value: themeMode === "dark",
            onChange: () => {
              toggleThemeMode();
            }
          }
        ]
      }
    ],
    [themeMode]
  );

  return <SettingMenu groups={optionGroups} />;
}
