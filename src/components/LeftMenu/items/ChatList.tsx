import { Fragment, useEffect, useState } from "react";
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

const mockData = createMockChats(10);

export function ChatList() {
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
      <List
        sx={{
          width: 1,
          flex: 1,
          overflow: "auto"
        }}
      >
        {mockData.map((chat, index) => (
          <Fragment key={chat.id}>
            <ListItem>
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
          </Fragment>
        ))}
      </List>
    </Box>
  );
}
