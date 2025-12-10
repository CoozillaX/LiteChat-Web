import { Brush, ChevronRight, Language } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography
} from "@mui/material";

const optionGroups = [
  [
    {
      label: "Appearance",
      icon: <Brush fontSize="small" />
    },
    {
      label: "Language",
      icon: <Language fontSize="small" />
    }
  ]
];

export default function SettingList() {
  return (
    <Box
      sx={{
        height: 1,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box sx={{ p: 1, flex: 1, borderRadius: 2, overflow: "auto" }}>
        <MenuList
          sx={{
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "transparent"
            }
          }}
        >
          {/* Profile Section */}
          <MenuItem
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
          </MenuItem>

          {/* Settings Options */}
          {optionGroups.map((group, groupIndex) => (
            <Box
              key={groupIndex}
              sx={{ mb: groupIndex < optionGroups.length - 1 ? 2 : 0 }} // 组间距
            >
              {group.map((option) => (
                <MenuItem key={option.label} sx={{ py: 1 }}>
                  <ListItemIcon>{option.icon}</ListItemIcon>
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
                </MenuItem>
              ))}
            </Box>
          ))}
        </MenuList>
      </Box>
    </Box>
  );
}
