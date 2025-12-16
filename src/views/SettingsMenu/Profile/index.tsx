import { useEffect, useMemo, useState } from "react";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";
import { useSettingMenuContext } from "@/contexts";
import { IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { I18nKeys } from "@/i18n";
import { Save } from "@mui/icons-material";

export default function Index() {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");

  const { setHeaderProps } = useSettingMenuContext();

  const optionGroups: SettingMenuGroup[] = useMemo(
    (): SettingMenuGroup[] => [
      {
        items: [
          {
            type: SettingMenuItemType.Link,
            label: t(I18nKeys.settings.profile.avatar.title),
            path: "./avatar"
          }
        ]
      },
      {
        items: [
          {
            type: SettingMenuItemType.Input,
            value: firstName,
            label: t(I18nKeys.settings.profile.personalInfo.firstNameTitle),
            placeholder: t(
              I18nKeys.settings.profile.personalInfo.firstNamePlaceholder
            ),
            onChange: (value: string) => {
              setFirstName(value);
            }
          },
          {
            type: SettingMenuItemType.Input,
            value: lastName,
            label: t(I18nKeys.settings.profile.personalInfo.lastNameTitle),
            placeholder: t(
              I18nKeys.settings.profile.personalInfo.lastNamePlaceholder
            ),
            onChange: (value: string) => {
              setLastName(value);
            }
          }
        ]
      },
      {
        items: [
          {
            type: SettingMenuItemType.Input,
            value: bio,
            label: t(I18nKeys.settings.profile.bio.title),
            placeholder: t(I18nKeys.settings.profile.bio.placeholder),
            onChange: (value: string) => {
              setBio(value);
            }
          }
        ]
      },
      {
        items: [
          {
            type: SettingMenuItemType.Link,
            path: "/auth",
            component: (
              <Typography color="error" fontSize="0.90rem">
                {t(I18nKeys.settings.profile.logout)}
              </Typography>
            ),
          }
        ]
      }
    ],
    [firstName, lastName, bio, t]
  );

  // Set the right slot in the header to a Save button
  useEffect(() => {
    setHeaderProps((prevProps) => {
      return {
        ...prevProps,
        rightSlot: (
          <IconButton size="small">
            <Save />
          </IconButton>
        )
      };
    });
    // Cleanup on unmount
    return () => {
      setHeaderProps((prevProps) => ({
        ...prevProps,
        rightSlot: null
      }));
    };
  }, []);

  return <SettingMenu groups={optionGroups} />;
}
