import { ContentCut } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";

export default function AppearancePage() {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ContentCut fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="This is the Appearance settings page." />
      </MenuItem>
    </MenuList>
  );
}
