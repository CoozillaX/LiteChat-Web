import { useEffect, useMemo, useRef, useState } from "react";
import SettingMenu, {
  SettingMenuItemType,
  type SettingMenuGroup
} from "@/components/SettingMenu";
import { useSettingMenuContext } from "@/contexts";
import { IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { I18nKeys } from "@/i18n";
import { Save } from "@mui/icons-material";
import { useStore } from "@/state/hooks";
import { store } from "@/state/store";
import { clearUser, setUser } from "@/views/App/slice";
import { profileSchema } from "./schema";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useStore((state) => state.app.user);

  // Local state for user profile fields
  const [formData, setFormData] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    bio: user?.bio ?? ""
  });

  // Ref to hold the latest formData for saving
  const formDataRef = useRef(formData);
  formDataRef.current = formData;

  // Handler for saving profile data
  const onSaveProfile = () => {
    if (user) {
      saveProfileData(formDataRef.current);
    }
    navigate("..");
  };

  // Setting menu context to set header props
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
            value: formDataRef.current.firstName,
            label: t(I18nKeys.settings.profile.personalInfo.firstNameTitle),
            placeholder: t(
              I18nKeys.settings.profile.personalInfo.firstNamePlaceholder
            ),
            onChange: (value: string) => {
              const result = profileSchema
                .pick({ firstName: true })
                .safeParse({ firstName: value });
              if (result.success || value.length === 0)
                setFormData((prev) => ({ ...prev, firstName: value }));
            }
          },
          {
            type: SettingMenuItemType.Input,
            value: formDataRef.current.lastName,
            label: t(I18nKeys.settings.profile.personalInfo.lastNameTitle),
            placeholder: t(
              I18nKeys.settings.profile.personalInfo.lastNamePlaceholder
            ),
            onChange: (value: string) => {
              const result = profileSchema
                .pick({ lastName: true })
                .safeParse({ lastName: value });
              if (result.success)
                setFormData((prev) => ({ ...prev, lastName: value }));
            }
          }
        ]
      },
      {
        items: [
          {
            type: SettingMenuItemType.Input,
            value: formDataRef.current.bio,
            label: t(I18nKeys.settings.profile.bio.title),
            placeholder: t(I18nKeys.settings.profile.bio.placeholder),
            onChange: (value: string) => {
              const result = profileSchema
                .pick({ bio: true })
                .safeParse({ bio: value });
              if (result.success)
                setFormData((prev) => ({ ...prev, bio: value }));
            }
          }
        ]
      },
      {
        items: [
          {
            type: SettingMenuItemType.Link,
            path: "/auth",
            beforeNavigate: () => {
              store.dispatch(clearUser());
            },
            component: (
              <Typography color="error" fontSize="0.90rem">
                {t(I18nKeys.settings.profile.logout)}
              </Typography>
            )
          }
        ]
      }
    ],
    [formDataRef.current, t]
  );

  // Set the right slot in the header to a Save button
  useEffect(() => {
    setHeaderProps((prevProps) => {
      return {
        ...prevProps,
        rightSlot: (
          <IconButton size="small" onClick={onSaveProfile}>
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

const saveProfileData = (data: {
  firstName: string;
  lastName: string;
  bio: string;
}) => {
  const result = profileSchema.safeParse(data);
  // If validation fails, do not proceed
  if (!result.success) {
    return;
  }
  // TODO: Call API to save profile data
  // Update user in the global store
  store.dispatch(
    setUser({
      ...store.getState().app.user!,
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      bio: result.data.bio
    })
  );
};
