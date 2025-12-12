import { Box, List, ListSubheader } from "@mui/material";
import {
  CustomMenuItemRender,
  LinkMenuItemRender,
  SwitchMenuItemRender,
  SelectMenuItemRender
} from "./items";
import { SettingMenuItemType, type SettingMenuGroup } from "./types";

export interface SettingMenuProps {
  groups: SettingMenuGroup[];
}

export default function Index({ groups }: SettingMenuProps) {
  return (
    <Box
      sx={{
        height: 1
      }}
    >
      <Box sx={{ px: 4, py: 2 }}>
        <List
          disablePadding
          sx={{
            "& .MuiListItemButton-root": {
              "&:hover": {
                bgcolor: "transparent"
              }
            }
          }}
        >
          {groups.map((group, groupIndex) => (
            <Box
              key={groupIndex}
              sx={{
                mb: groupIndex < groups.length - 1 ? 4 : 0
              }}
            >
              {/* Handle group header */}
              {group.header && (
                <ListSubheader
                  disableSticky
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    lineHeight: "1.25rem",
                    color: "text.secondary",
                    pb: 1
                  }}
                >
                  {group.header}
                </ListSubheader>
              )}

              {/* Handle group items */}
              <Box
                sx={{
                  borderRadius: 3,
                  bgcolor: "background.level2"
                }}
              >
                {group.items.map((item) => {
                  switch (item.type) {
                    case SettingMenuItemType.Custom:
                      return <CustomMenuItemRender key={item.label} {...item} />;
                    case SettingMenuItemType.Link:
                      return <LinkMenuItemRender key={item.label} {...item} />;
                    case SettingMenuItemType.Switch:
                      return <SwitchMenuItemRender key={item.label} {...item} />;
                    case SettingMenuItemType.Select:
                      return <SelectMenuItemRender key={item.label} {...item} />;
                    default:
                      return null;
                  }
                })}
              </Box>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export * from "./types";
