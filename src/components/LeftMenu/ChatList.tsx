import { createMockChats } from "@/utils/mock";
import { formatChatTime } from "@/utils/time";
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
import { useEffect, useState } from "react";

const mockData = createMockChats(100);

export default function ChatList() {
  // State to trigger re-render every minute for time updates
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 1,
        minHeighgt: 0
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
        Chats
      </Typography>
      <List
        sx={{
          width: 1,
          flex: 1,
          overflow: "auto"
        }}
      >
        {mockData.map((chat, index) => (
          <>
            <ListItem key={chat.id}>
              <ListItemAvatar>
                <Avatar
                  alt={`${chat.firstName} ${chat.lastName}`}
                  src={chat.avatar}
                  sx={{ bgcolor: "white" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>{`${chat.firstName} ${chat.lastName}`}</Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        color: "gray",
                        marginLeft: "8px",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {formatChatTime(chat.timestamp)}
                    </Typography>
                  </Box>
                }
                secondary={
                  chat.lastMessage.length > 24
                    ? chat.lastMessage.slice(0, 24) + "..."
                    : chat.lastMessage
                }
              />
            </ListItem>
            {index < mockData.length - 1 && <Divider component="li" />}
          </>
        ))}
      </List>
    </Box>
  );
}
