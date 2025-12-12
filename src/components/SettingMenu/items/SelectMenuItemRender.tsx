import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select
} from "@mui/material";
import type { SelectMenuItem } from "../types";

export function SelectMenuItemRender({
  label,
  icon,
  value,
  options,
  onChange
}: SelectMenuItem) {
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
      <ListItemIcon sx={{ minWidth: 42, color: "text.primary" }}>
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        slotProps={{
          primary: {
            fontSize: "0.90rem"
          }
        }}
      />
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        size="small"
        autoWidth
        sx={{
          "& .MuiOutlinedInput-input": {
            py: 0.5,
            fontSize: "0.80rem"
          }
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={option.value === value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </ListItemButton>
  );
}
