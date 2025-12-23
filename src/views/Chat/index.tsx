import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Box,
  CircularProgress,
  IconButton,
  InputBase,
  Popover,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import {
  ArrowBackIosNew,
  AttachFile,
  EmojiEmotions,
  MoreHoriz,
  Send
} from "@mui/icons-material";
import eMartData from "@emoji-mart/data";
import PageHeader from "@/components/PageHeader";
import { useStore } from "@/state/hooks";
import { I18nKeys } from "@/i18n";
import { store } from "@/state/store";
import { ChatItemRender } from "./ChatItemRender";
import { addMessage } from "./slice";

// Lazy load the emoji picker component
const Picker = lazy(() => import("@emoji-mart/react"));

export default function Index() {
  return (
    <Box
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default"
      }}
    >
      <ChatHeader />
      <ChatContent />
      <ChatInput />
    </Box>
  );
}

function ChatHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <PageHeader
      leftSlot={
        <>
          {isMobile && (
            <IconButton
              size="small"
              onClick={() => {
                navigate("..");
              }}
            >
              <ArrowBackIosNew />
            </IconButton>
          )}
          <Typography fontWeight="bold" variant="subtitle1" sx={{ pl: 1 }}>
            {store.getState().chat.title || "Chat"}
          </Typography>
        </>
      }
      rightSlot={
        <IconButton>
          <MoreHoriz />
        </IconButton>
      }
    />
  );
}

function ChatContent() {
  const messages = useStore(({ chat }) => chat.data);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: isFirstRender.current ? "auto" : "smooth"
      });
      isFirstRender.current = false;
    }
  }, [messages]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        flex: 1,
        overflowY: "auto",
        bgcolor: "background.level1"
      }}
    >
      <Box sx={{ p: 2 }}>
        <ChatItemRender />
      </Box>
    </Box>
  );
}

export function ChatInput() {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const isDarkMode = useStore((state) => state.app.darkMode.enabled);

  // Memoized emoji picker i18n
  const emojiI18n = useMemo(
    () => t(I18nKeys.emojiPicker.root, { returnObjects: true }),
    [t, i18n.language]
  );

  useEffect(() => {
    setAnchorEl(null);
  }, [i18n.language]);

  // Handlers for emoji picker
  const handleEmojiOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEmojiClose = () => setAnchorEl(null);

  // Handler for emoji selection
  const onEmojiSelect = (emoji: any) => {
    const emojiNative = emoji.native;
    setMessage(message + emojiNative);
  };

  // Handler for sending message (to be implemented)
  const handleSendMessage = () => {
    if (!message.trim()) return;
    store.dispatch(
      addMessage({
        id: Date.now(),
        senderId: 1,
        timestamp: Date.now(),
        type: "message",
        segments: [{ type: "text", data: { text: message } }]
      })
    );
    store.dispatch(
      addMessage({
        id: Date.now() + 1,
        senderId: 2,
        timestamp: Date.now(),
        type: "message",
        segments: [{ type: "text", data: { text: `Echo1: ${message}` } }]
      })
    );
    store.dispatch(
      addMessage({
        id: Date.now() + 2,
        senderId: 2,
        timestamp: Date.now(),
        type: "message",
        segments: [{ type: "text", data: { text: `Echo2: ${message}` } }]
      })
    );
    setMessage("");
  };

  return (
    <Box
      sx={{
        minHeight: 56,
        borderTop: 1,
        borderColor: "divider",
        display: "flex",
        alignItems: "center",
        px: 2,
        py: 0.9,
        bgcolor: "background.level1",
        position: "relative"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-start"
        }}
      >
        <IconButton sx={{ mr: 1 }}>
          <AttachFile />
        </IconButton>
      </Box>
      <InputBase
        value={message}
        multiline
        maxRows={18}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
        sx={{
          flex: 1
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-end"
        }}
      >
        <IconButton
          color={Boolean(anchorEl) ? "primary" : "default"}
          onClick={handleEmojiOpen}
        >
          <EmojiEmotions />
        </IconButton>

        <IconButton
          color="primary"
          disabled={!message.trim()}
          onClick={handleSendMessage}
        >
          <Send />
        </IconButton>
      </Box>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleEmojiClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ mb: 1 }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
            }
          }
        }}
      >
        <Suspense
          fallback={
            <Box
              sx={{
                width: 352,
                height: 435,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: isDarkMode ? "#15181c" : "#fff"
              }}
            >
              <CircularProgress size={28} />
            </Box>
          }
        >
          <Box sx={{ minWidth: 352, minHeight: 350 }}>
            <Picker
              data={eMartData}
              onEmojiSelect={onEmojiSelect}
              i18n={emojiI18n}
              theme={isDarkMode ? "dark" : "light"}
              searchPosition="none"
              previewPosition="none"
              skinTonePosition="none"
              navPosition="top"
            />
          </Box>
        </Suspense>
      </Popover>
    </Box>
  );
}
