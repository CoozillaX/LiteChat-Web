import { useEffect, useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from "@mui/material";
import { slate, slateDark, indigo, indigoDark } from "@radix-ui/colors";
import router from "@/routes";
import { useStore } from "@/state/hooks";
import { store } from "@/state/store";
import { setDarkModeEnabled } from "./slice";

export default function Index() {
  // Get current theme mode from the store
  const darkModeSettings = useStore(({ app }) => app.darkMode);
  const isPreferDark = useMediaQuery("(prefers-color-scheme: dark)");

  // Automatically follow system theme if enabled
  useEffect(() => {
    if (darkModeSettings.followSystem)
      store.dispatch(setDarkModeEnabled(isPreferDark));
  }, [darkModeSettings.followSystem, isPreferDark]);

  // Create MUI theme based on current theme mode
  const theme = useMemo(() => {
    const bgColors = darkModeSettings.enabled ? slateDark : slate;
    const primaryColors = darkModeSettings.enabled ? indigoDark : indigo;

    return createTheme({
      palette: {
        mode: darkModeSettings.enabled ? "dark" : "light",
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
  }, [darkModeSettings.enabled, isPreferDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
