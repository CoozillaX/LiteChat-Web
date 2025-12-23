import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatItem } from "./types";

export interface ChatState {
  title: string;
  data: ChatItem[];
}

const initialState: ChatState = {
  title: "",
  data: []
};

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // Initialise chat
    initialiseChat: () => initialState,
    // Set chat title
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    // Prepend unique messages to chat history
    prependHistory: (state, action: PayloadAction<ChatItem[]>) => {
      const newMessages = action.payload;
      const existingIds = new Set(state.data.map((m) => m.id));
      const uniqueNewMessages = newMessages.filter(
        (m) => !existingIds.has(m.id)
      );
      state.data = [...uniqueNewMessages, ...state.data];
    },
    // Add a new message if it doesn't already exist
    addMessage: (state, action: PayloadAction<ChatItem>) => {
      const msg = action.payload;
      const exists = state.data.some((m) => m.id === msg.id);
      if (!exists) {
        state.data.push(msg);
      }
    },
    // Update an existing message by ID
    updateMessage: (
      state,
      action: PayloadAction<{ id: number; changes: Partial<ChatItem> }>
    ) => {
      const index = state.data.findIndex((m) => m.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = {
          ...state.data[index],
          ...action.payload.changes
        };
      }
    },
    // Remove a message by ID
    removeMessage: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((m) => m.id !== action.payload);
    }
  }
});

export const {
  initialiseChat,
  setTitle,
  prependHistory,
  addMessage,
  updateMessage,
  removeMessage
} = slice.actions;

export default slice.reducer;
