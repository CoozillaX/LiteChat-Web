import { Box, List, ListSubheader } from "@mui/material";
import {
  CustomMenuItemRender,
  LinkMenuItemRender,
  SwitchMenuItemRender,
  SelectMenuItemRender,
  InputMenuItemRender
} from "./items";
import { SettingMenuItemType, type SettingMenuGroup } from "./types";

export interface SettingMenuProps {
  groups: SettingMenuGroup[];
}

export default function Index({ groups }: SettingMenuProps) {
  return (
    <Box
      sx={{
        height: 1,
        userSelect: "none"
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
                {group.items.map((item, index) => {
                  switch (item.type) {
                    case SettingMenuItemType.Custom:
                      return <CustomMenuItemRender key={index} {...item} />;
                    case SettingMenuItemType.Link:
                      return <LinkMenuItemRender key={index} {...item} />;
                    case SettingMenuItemType.Switch:
                      return <SwitchMenuItemRender key={index} {...item} />;
                    case SettingMenuItemType.Select:
                      return <SelectMenuItemRender key={index} {...item} />;
                    case SettingMenuItemType.Input:
                      return <InputMenuItemRender key={index} {...item} />;
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
