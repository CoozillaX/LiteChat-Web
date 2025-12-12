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

const optionGroups = [
  [
    {
      label: "Appearance",
      icon: <Brush fontSize="small" />,
      path: "/settings/appearance"
    },
    {
      label: "Language",
      icon: <Language fontSize="small" />,
      path: "/settings/language"
    }
  ]
];

export function SettingList() {
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
                  key={option.label}
                  sx={{ py: 1, borderRadius: 3 }}
                  selected={location.pathname === option.path}
                  onClick={() => navigate(option.path)}
                >
                  <ListItemIcon sx={{ minWidth: 42, color: "text.primary" }}>
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={option.label}
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
