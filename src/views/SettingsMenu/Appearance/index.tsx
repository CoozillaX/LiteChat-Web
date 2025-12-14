import { useMemo } from "react";
import { Brush } from "@mui/icons-material";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";
import { useThemeMode } from "@/contexts";

export default function Index() {
  const { themeMode, toggleThemeMode } = useThemeMode();

  // Define appearance option groups
  const optionGroups: SettingMenuGroup[] = useMemo(
    () => [
      {
        items: [
          {
            type: SettingMenuItemType.Switch,
            label: "Dark Mode",
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
