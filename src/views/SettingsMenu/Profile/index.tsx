import { useMemo } from "react";
import SettingMenu, { type SettingMenuGroup } from "@/components/SettingMenu";

export default function Index() {
  const optionGroups: SettingMenuGroup[] = useMemo(() => [], []);

  return <SettingMenu groups={optionGroups} />;
}
