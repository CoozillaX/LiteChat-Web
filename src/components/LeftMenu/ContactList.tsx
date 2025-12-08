import { createMockContacts } from "@/utils/mock";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";

const mockData = createMockContacts(100);

export default function ContactList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 1
      }}
    >
      <Typography
        sx={{
          p: 1.6,
          fontWeight: "bold",
          borderBottom: 1,
          borderColor: "divider",
          textAlign: "center",
          flexShrink: 0
        }}
      >
        Contacts
      </Typography>
      <List
        sx={{
          width: 1,
          flex: 1,
          overflow: "auto"
        }}
      >
        {mockData.map((contact, index) => (
          <>
            <ListItem key={contact.id}>
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
          </>
        ))}
      </List>
    </Box>
  );
}
