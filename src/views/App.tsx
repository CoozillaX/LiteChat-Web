import { useMemo, useState, useEffect, createContext } from "react";
import { AppRoutes } from "@/routes";
import {
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
  createTheme
} from "@mui/material";
import { slate, slateDark, indigo, indigoDark } from '@radix-ui/colors';
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
  const theme = useMemo(() => {
  // 2. 核心逻辑：根据 mode 切换色板
  // 这样你就不需要手动写 hex 值，Radix 会自动帮你反转颜色
  const bgColors = mode === 'dark' ? slateDark : slate;
  const primaryColors = mode === 'dark' ? indigoDark : indigo;

  return createTheme({
    palette: {
      mode,
      // 主色调：Radix 的第 9 级通常是最佳的纯色背景
      primary: {
        main: primaryColors.indigo9,
      },
      // 背景配置
      background: {
        default: bgColors.slate1,
        paper: bgColors.slate2,
        level1: bgColors.slate2,
        level2: bgColors.slate3,
        level3: bgColors.slate4,
      },
      // 文字配置：Radix 11/12 级专门用于高对比度文字
      text: {
        primary: bgColors.slate12,   // 主要文字
        secondary: bgColors.slate11, // 次要文字 (这种灰色非常专业，不费眼)
      },
      // 分割线：Radix 6 级专门用于边框
      divider: bgColors.slate6,
    },
    
    // 3. 重要配置：禁用 MUI 默认的 Overlay
    // 因为 Radix 的深色模式已经校准得很完美了，不需要 MUI 再叠加一层白光
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none', 
          },
        },
      },
    },
  });
}, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
