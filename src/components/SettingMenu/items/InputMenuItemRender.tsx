import { Box, InputBase, ListItem, ListItemText } from "@mui/material";
import type { InputMenuItem } from "../types";

export function InputMenuItemRender({
  label,
  value,
  placeholder,
  onChange
}: InputMenuItem) {
  return (
    <ListItem
      sx={{
        py: 1.3,
        position: "relative",
        maxHeight: 50,
        cursor: "default",
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
      <ListItemText
        primary={label}
        slotProps={{
          primary: {
            fontSize: "0.9rem"
          }
        }}
        sx={{
          mr: 2,
          flex: "0 0 auto"
        }}
      />

      <Box
        sx={{
          flexGrow: 1,
          width: "auto"
        }}
      >
        <InputBase
          fullWidth
          sx={{
            py: 0.5,
            px: 1,
            fontSize: "0.9rem",
            input: {
              textAlign: "right"
            },
            "&.Mui-focused": {
              bgcolor: "transparent"
            }
          }}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Box>
    </ListItem>
  );
}
