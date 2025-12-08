import { Brush, Language } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

const options = [
  {
    label: "Appearance",
    icon: <Brush />
  },
  {
    label: "Language",
    icon: <Language />
  }
];

export default function SettingList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 1
      }}
    >
      <Typography
        sx={{
          p: 1.6,
          fontWeight: "bold",
          borderBottom: 1,
          borderColor: "divider",
          textAlign: "center",
          flexShrink: 0
        }}
      >
        Settings
      </Typography>
      <Box
        sx={{
          width: 1,
          height: 1,
          p: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Profile Card */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            borderRadius: 2,
            transition: "0.2s",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "action.hover"
            }
          }}
        >
          <Avatar
            src="https://api.dicebear.com/9.x/identicon/svg?seed=Coo"
            sx={{ width: 48, height: 48, mr: 2, bgcolor: "white" }}
          />
          <Box sx={{ overflow: "hidden" }}>
            <Typography fontWeight="bold">CoozillaX</Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              Meow! This is my profile status.
            </Typography>
          </Box>
        </Box>

        {/* Settings Options */}
        <List>
          {options.map((option, index) => (
            <ListItemButton key={index} sx={{ borderRadius: 2 }}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText
                primary={option.label}
                slotProps={{
                  primary: {
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    letterSpacing: 0.2
                  }
                }}
                sx={{ ml: -1 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
}
