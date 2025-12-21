import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Brush, ChevronRight, Language } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { I18nKeys } from "@/i18n";
import {
  SettingMenuItemType,
  type LinkMenuItem
} from "@/components/SettingMenu";
import { useMemo } from "react";
import { useStore } from "@/state/hooks";

export function SettingList() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const user = useStore(({ app }) => app.user);

  const optionGroups: LinkMenuItem[][] = useMemo(
    (): LinkMenuItem[][] => [
      [
        {
          type: SettingMenuItemType.Link,
          path: "/settings/profile",
          component: (
            <>
              <ListItemIcon sx={{ minWidth: 0, mr: 2, py: 1 }}>
                <Avatar
                  src={user?.avatarUrl ?? undefined}
                  alt="User Avatar"
                  sx={{ width: 48, height: 48, bgcolor: user?.avatarUrl ? "white" : undefined }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontWeight="bold" sx={{ fontSize: "1rem" }}>
                    {`${user?.firstName} ${user?.lastName}`}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {user?.bio ?? ""}
                  </Typography>
                }
                sx={{ my: 0 }}
              />
            </>
          )
        }
      ],
      [
        {
          type: SettingMenuItemType.Link,
          label: I18nKeys.settings.appearance.title,
          icon: <Brush fontSize="small" />,
          path: "/settings/appearance"
        },
        {
          type: SettingMenuItemType.Link,
          label: I18nKeys.settings.language.title,
          icon: <Language fontSize="small" />,
          path: "/settings/language"
        }
      ]
    ],
    [user]
  );

  return (
    <Box
      sx={{
        height: 1,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box sx={{ p: 1, flex: 1, borderRadius: 3, overflow: "auto" }}>
        <List
          sx={{
            "& .MuiListItemButton-root": {
              "&:hover": {
                bgcolor: "transparent"
              }
            }
          }}
        >
          {optionGroups.map((group, groupIndex) => (
            <Box
              key={groupIndex}
              sx={{ mb: groupIndex < optionGroups.length - 1 ? 2 : 0 }}
            >
              {group.map((option) => (
                <ListItemButton
                  key={option.path}
                  disableRipple
                  sx={{ py: 1, borderRadius: 3 }}
                  selected={location.pathname === option.path}
                  onClick={() => navigate(option.path)}
                >
                  {option.component ?? (
                    <>
                      <ListItemIcon
                        sx={{ minWidth: 42, color: "text.primary" }}
                      >
                        {option.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={option.label ? t(option.label) : ""}
                        slotProps={{
                          primary: {
                            fontSize: "0.90rem"
                          }
                        }}
                      />
                    </>
                  )}
                  <ChevronRight
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </ListItemButton>
              ))}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
}
