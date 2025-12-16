import {
  useMemo,
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback
} from "react";
import {
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
  createTheme
} from "@mui/material";
import { slate, slateDark, indigo, indigoDark } from "@radix-ui/colors";
import type { PaletteMode } from "@mui/material";

// Key for storing theme preference in localStorage
const THEME_STORAGE_KEY = "litechat-theme";

export interface ThemeModeContextType {
  themeMode: PaletteMode;
  toggleThemeMode: () => void;
}

// Create context for theme mode
const ThemeModeContext = createContext<ThemeModeContextType | null>(null);

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (ctx === null) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return ctx;
}

// Custom hook to manage theme mode state
function useThemeModeState() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const getInitialMode = (): PaletteMode => {
    const stored = localStorage.getItem(
      THEME_STORAGE_KEY
    ) as PaletteMode | null;
    if (stored) return stored;
    return prefersDarkMode ? "dark" : "light";
  };

  const [themeMode, setThemeMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    setThemeMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { themeMode, toggleThemeMode };
}

// Provider component to wrap the app with theme context
export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const { themeMode, toggleThemeMode } = useThemeModeState();

  const theme = useMemo(() => {
    const bgColors = themeMode === "dark" ? slateDark : slate;
    const primaryColors = themeMode === "dark" ? indigoDark : indigo;

    return createTheme({
      palette: {
        mode: themeMode,
        primary: {
          main: primaryColors.indigo9
        },
        background: {
          default: bgColors.slate1,
          paper: bgColors.slate2,
          level1: bgColors.slate2,
          level2: bgColors.slate3,
          level3: bgColors.slate4
        },
        text: {
          primary: bgColors.slate12,
          secondary: bgColors.slate11
        },
        divider: bgColors.slate6
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundImage: "none"
            }
          }
        }
      }
    });
  }, [themeMode]);

  const contextValue = useMemo(
    () => ({ themeMode, toggleThemeMode }),
    [themeMode, toggleThemeMode]
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
