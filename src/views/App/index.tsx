import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { slate, slateDark, indigo, indigoDark } from "@radix-ui/colors";
import router from "@/routes";
import { useStore } from "@/state/hooks";

export default function Index() {
  // Get current theme mode from the store
  const darkMode = useStore(({ app }) => app.darkMode);

  // Create MUI theme based on current theme mode
  const theme = useMemo(() => {
    const bgColors = darkMode ? slateDark : slate;
    const primaryColors = darkMode ? indigoDark : indigo;

    return createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
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
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
