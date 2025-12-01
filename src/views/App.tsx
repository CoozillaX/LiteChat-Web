import { useMemo, useState, useEffect, createContext } from "react";
import { AppRoutes } from "@/routes";
import {
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
  createTheme
} from "@mui/material";
import type { PaletteMode } from "@mui/material";

// Create a context for color mode (light/dark)
type ColorModeContextType = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType | null>(
  null
);

export default function App() {
  // Detect system color scheme preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<PaletteMode>("light");

  // Sync theme mode with system preference
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
    localStorage.setItem("litechat-theme", prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  // Function to toggle between light and dark mode
  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("litechat-theme", next);
      return next;
    });
  };

  // Create MUI theme based on the current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
