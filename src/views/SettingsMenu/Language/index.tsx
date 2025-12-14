import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Translate } from "@mui/icons-material";
import { I18nKeys, changeLanguage, supportedLanguages } from "@/i18n";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";

export default function Index() {
  const { i18n, t } = useTranslation();

  // Set the menu title on mount
  const options = useMemo(
    () =>
      supportedLanguages.map((lng) => ({
        label: t(I18nKeys.languageName, { lng }),
        value: lng
      })),
    [t]
  );

  const optionGroups: SettingMenuGroup[] = useMemo(
    () => [
      {
        items: [
          {
            type: SettingMenuItemType.Select,
            label: "Language",
            icon: <Translate fontSize="small" />,
            value: i18n.language,
            options: options,
            onChange: (value: string) => {
              changeLanguage(value);
            }
          }
        ]
      }
    ],
    [i18n.language, options]
  );

  return <SettingMenu groups={optionGroups} />;
}
