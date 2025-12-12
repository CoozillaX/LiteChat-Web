import { useContext, useMemo } from "react";
import { Brush } from "@mui/icons-material";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";
import { ColorModeContext } from "@/views/App";

export default function Index() {
  const ctx = useContext(ColorModeContext);

  const optionGroups: SettingMenuGroup[] = useMemo(
    () => [
      {
        items: [
          {
            type: SettingMenuItemType.Switch,
            label: "Dark Mode",
            icon: <Brush fontSize="small" />,
            value: ctx?.mode === "dark",
            onChange: () => {
              ctx?.toggleColorMode();
            }
          }
        ]
      }
    ],
    [ctx]
  );

  return <SettingMenu groups={optionGroups} />;
}
