import { useMemo, useState } from "react";
import {
  Backdrop,
  Box,
  Chip,
  Skeleton,
  Typography
} from "@mui/material";
import { useStore } from "@/state/hooks";
import type { ChatItem } from "../types";
import LetterAvatar from "@/components/LetterAvatar";

export function ChatItemRender() {
  const messages: ChatItem[] = useStore(({ chat }) => chat.data);

  // Group messages by sender and time proximity
  const groupedMessages = useMemo(() => {
    const groups: ChatItem[][] = [];

    messages.forEach((message) => {
      const lastGroup = groups.at(-1);
      const lastMessage = lastGroup?.at(-1);

      const isMessageType =
        message.type === "message" && lastMessage?.type === "message";
      const sameSender = lastMessage?.senderId === message.senderId;
      const withinTimeFrame =
        message.timestamp - (lastMessage?.timestamp || 0) < 5 * 60 * 1000;

      const canAppend =
        lastGroup && isMessageType && sameSender && withinTimeFrame;

      // Insert timestamp notification if time gap is large
      if (!withinTimeFrame) {
        groups.push([
          {
            type: "notification",
            id: -1,
            timestamp: message.timestamp,
            notificationText: new Date(message.timestamp).toLocaleString([], {
              hour: "2-digit",
              minute: "2-digit"
            })
          }
        ]);
      }

      // Append to last group or create new group
      if (canAppend) {
        lastGroup.push(message);
      } else {
        groups.push([message]);
      }
    });
    return groups;
  }, [messages]);

  return (
    <>
      {groupedMessages.map((group, index) => (
        <GroupedChatItemsRender key={index} group={group} />
      ))}
    </>
  );
}

function GroupedChatItemsRender({ group }: { group: ChatItem[] }) {
  // Safety check
  if (group[0]?.type !== "message") {
    return group.map((item) => {
      switch (item.type) {
        case "notification":
          return <NotificationRender key={item.id} item={item} />;
        default:
          return null;
      }
    });
  }

  const uid = useStore(({ app }) => app.user?.id);
  const senderId = group[0].senderId;
  const isOwn = senderId === uid;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isOwn ? "row-reverse" : "row",
        alignItems: "flex-start",
        mb: 2,
        position: "relative"
      }}
    >
      {isOwn ? null : (
        <Box
          sx={{
            height: "fit-content",
            position: "sticky",
            bottom: 8,
            mb: 0.8,
            alignSelf: "flex-end"
          }}
        >
          <LetterAvatar
            name={`User ${senderId}`}
            sx={{
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: isOwn ? "flex-end" : "flex-start",
          gap: 0.5,
          mx: 1
        }}
      >
        {group.map((item) => (
          <MessageRender key={item.id} item={item} isOwn={isOwn} />
        ))}
      </Box>
    </Box>
  );
}

function MessageRender({ item, isOwn }: { item: ChatItem; isOwn: boolean }) {
  const isDarkMode = useStore(({ app }) => app.darkMode.enabled);

  return (
    <Box
      sx={{
        bgcolor: isOwn
          ? isDarkMode
            ? "primary.dark"
            : "primary.main"
          : isDarkMode
          ? "grey.800"
          : "grey.200",
        color: isOwn ? "primary.contrastText" : "text.primary",
        borderRadius: 3,
        maxWidth: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: isOwn ? "flex-end" : "flex-start"
      }}
    >
      {item.segments?.map((segment, index) => {
        switch (segment.type) {
          case "text":
            return <TextSegmentRender key={index} segment={segment} />;
          case "image":
            return <ImageSegmentRender key={index} segment={segment} />;
          default:
            return null;
        }
      })}
    </Box>
  );
}

function TextSegmentRender({ segment }: { segment: any }) {
  return (
    <Typography
      sx={{
        m: 1.4,
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
        userSelect: "text"
      }}
    >
      {segment.data.text}
    </Typography>
  );
}

export function ImageSegmentRender({ segment }: { segment: any }) {
  const [loading, setLoading] = useState(true);
  const [showFull, setShowFull] = useState(false);

  return (
    <>
      <Box
        onClick={() => !loading && setShowFull(true)}
        sx={{ m: 0.4, position: "relative", cursor: "pointer" }}
      >
        {loading && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ width: 180, height: 180, borderRadius: 2 }}
          />
        )}

        <Box
          component="img"
          src={segment.data.url}
          alt={segment.data.alt || "image"}
          onLoad={() => setLoading(false)}
          sx={{
            display: loading ? "none" : "block",
            maxHeight: 180,
            borderRadius: 2,
            objectFit: "cover"
          }}
        />
      </Box>

      <Backdrop
        open={showFull}
        onClick={() => setShowFull(false)}
        sx={{
          zIndex: (theme) => theme.zIndex.modal + 1,
          bgcolor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(4px)"
        }}
      >
        <Box component="img" src={segment.data.url} />
      </Backdrop>
    </>
  );
}

function NotificationRender({ item }: { item: ChatItem }) {
  return (
    <Box
      sx={{
        my: 2,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Chip label={item.notificationText} />
    </Box>
  );
}
