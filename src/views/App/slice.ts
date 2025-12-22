import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/user";

export interface AppState {
  darkMode: {
    enabled: boolean;
    followSystem: boolean;
  };
  language: string;
  user: User | null;
}

const initialState: AppState = {
  darkMode: {
    enabled: false,
    followSystem: true
  },
  language: "en-us",
  user: null
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initialiseApp: () => initialState,
    setDarkModeEnabled(state, action: PayloadAction<boolean>) {
      state.darkMode.enabled = action.payload;
    },
    setDarkModeFollowSystem(state, action: PayloadAction<boolean>) {
      state.darkMode.followSystem = action.payload;
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
  setDarkModeEnabled,
  setDarkModeFollowSystem,
  setLanguage,
  setUser,
  clearUser
} = slice.actions;

export default slice.reducer;
