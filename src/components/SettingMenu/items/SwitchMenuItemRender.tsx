import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch
} from "@mui/material";
import type { SwitchMenuItem } from "../types";

export function SwitchMenuItemRender({
  label,
  icon,
  value,
  onChange
}: SwitchMenuItem) {
  return (
    <ListItemButton
      disableRipple
      sx={{
        py: 1.3,
        position: "relative",
        maxHeight: 50,
        "&:not(:last-of-type)::after": {
          content: '""',
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 0,
          height: "1px",
          backgroundColor: "action.selected",
          opacity: 0.5
        }
      }}
    >
      {icon && (
        <ListItemIcon sx={{ minWidth: 42, color: "text.primary" }}>
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={label}
        slotProps={{
          primary: {
            fontSize: "0.90rem"
          }
        }}
      />
      <Switch checked={value} onChange={(e) => onChange(e.target.checked)} />
    </ListItemButton>
  );
}
