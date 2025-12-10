import { Brush, Language } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography
} from "@mui/material";

const options = [
  {
    label: "Appearance",
    icon: <Brush fontSize="small" />
  },
  {
    label: "Language",
    icon: <Language fontSize="small" />
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
        <MenuList>
          {options.map((option, index) => (
            <MenuItem key={index} sx={{ borderRadius: 2 }}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </MenuList>
      </Box>
    </Box>
  );
}
