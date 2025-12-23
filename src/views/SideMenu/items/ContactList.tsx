import { Fragment, useEffect } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { createMockContacts } from "@/utils/mock";
import { useSideMenuContext } from "@/contexts";
import LetterAvatar from "@/components/LetterAvatar";

const mockData = createMockContacts(10);

export function ContactList() {
  const { setHeaderProps } = useSideMenuContext();

  useEffect(() => {
    // Set header when component mounts
    setHeaderProps((prevProps) => ({
      ...prevProps,
      rightSlot: (
        <IconButton size="small" color="primary">
          <PersonAdd />
        </IconButton>
      ),
      showSearch: true
    }));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 1
      }}
    >
      <List
        sx={{
          width: 1,
          flex: 1,
          overflow: "auto",
          pt: 0
        }}
      >
        {mockData.map((contact) => (
          <Fragment key={contact.id}>
            <ListItemButton>
              <ListItemAvatar>
                <LetterAvatar
                  name={`${contact.firstName} ${contact.lastName}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${contact.firstName} ${contact.lastName}`}
              />
            </ListItemButton>
            <Divider component="div" />
          </Fragment>
        ))}
      </List>
    </Box>
  );
}
