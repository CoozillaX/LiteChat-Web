import { Fragment, useEffect } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { createMockContacts } from "@/utils/mock";
import { useLeftMenuContext } from "..";

const mockData = createMockContacts(10);

export function ContactList() {
  const { setHeader } = useLeftMenuContext();

  useEffect(() => {
    // Set header when component mounts
    setHeader({
      rightSlot: (
        <IconButton size="small" color="primary">
          <PersonAdd />
        </IconButton>
      ),
      showSearch: true,
    });
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
          overflow: "auto"
        }}
      >
        {mockData.map((contact, index) => (
          <Fragment key={contact.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={`${contact.firstName} ${contact.lastName}`}
                  src={contact.avatar}
                  sx={{ bgcolor: "white" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${contact.firstName} ${contact.lastName}`}
              />
            </ListItem>
            {index < mockData.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </Box>
  );
}
