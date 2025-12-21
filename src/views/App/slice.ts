import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/user";

export interface AppState {
  darkMode: boolean;
  language: string;
  user: User | null;
}

const initialState: AppState = {
  darkMode: false,
  language: "en-us",
  user: null
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initialiseApp: () => initialState,
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    }
  }
});

export const {
  initialiseApp,
  setLanguage,
  toggleDarkMode,
  setUser,
  clearUser
} = slice.actions;

export default slice.reducer;
