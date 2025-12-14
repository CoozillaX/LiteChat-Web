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

const optionGroups = [
  [
    {
      titleI18nKey: I18nKeys.settings.appearance.title,
      icon: <Brush fontSize="small" />,
      path: "/settings/appearance"
    },
    {
      titleI18nKey: I18nKeys.settings.language.title,
      icon: <Language fontSize="small" />,
      path: "/settings/language"
    }
  ]
];

export function SettingList() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

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
          {/* Profile Section */}
          <ListItemButton
            key={"profile"}
            disableRipple
            sx={{
              p: 2,
              borderRadius: 2,
              mb: 1
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
              <Avatar
                src="https://api.dicebear.com/9.x/identicon/svg?seed=Coo"
                sx={{ width: 48, height: 48, bgcolor: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography fontWeight="bold" sx={{ fontSize: "1rem" }}>
                  CoozillaX
                </Typography>
              }
              secondary={
                <Typography variant="caption" color="text.secondary">
                  Meow!
                </Typography>
              }
              sx={{ my: 0 }}
            />
            <ChevronRight fontSize="small" sx={{ color: "text.secondary" }} />
          </ListItemButton>

          {/* Settings Options */}
          {optionGroups.map((group, groupIndex) => (
            <Box
              key={groupIndex}
              sx={{ mb: groupIndex < optionGroups.length - 1 ? 2 : 0 }}
            >
              {group.map((option) => (
                <ListItemButton
                  key={option.titleI18nKey}
                  disableRipple
                  sx={{ py: 1, borderRadius: 3 }}
                  selected={location.pathname === option.path}
                  onClick={() => navigate(option.path)}
                >
                  <ListItemIcon sx={{ minWidth: 42, color: "text.primary" }}>
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={t(option.titleI18nKey)}
                    slotProps={{
                      primary: {
                        fontSize: "0.90rem"
                      }
                    }}
                  />
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
