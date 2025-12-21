import { useNavigate } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import type { LinkMenuItem } from "../types";

export function LinkMenuItemRender({
  label,
  icon,
  path,
  beforeNavigate,
  component
}: LinkMenuItem) {
  const navigate = useNavigate();

  return (
    <ListItemButton
      disableRipple
      onClick={() => {
        beforeNavigate?.();
        navigate(path);
      }}
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
      {component ?? (
        <>
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
          <ChevronRight
            fontSize="small"
            sx={{ color: "text.secondary", opacity: 0.5 }}
          />
        </>
      )}
    </ListItemButton>
  );
}
