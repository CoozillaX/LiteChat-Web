import { Fragment, useEffect, useState } from "react";
import { createMockChats } from "@/utils/mock";
import { formatChatTime } from "@/utils/time";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
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
          overflow: "auto",
          pt: 0
        }}
      >
        {mockData.map((chat) => (
          <Fragment key={chat.id}>
            <ListItemButton>
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
                secondary={chat.lastMessage}
                slotProps={{
                  secondary: {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                  }
                }}
              />
            </ListItemButton>
            <Divider component="div" />
          </Fragment>
        ))}
      </List>
    </Box>
  );
}
