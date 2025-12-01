import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: `
          linear-gradient(135deg,
          rgba(79,172,254,0.65) 0%,
          rgba(0,242,254,0.60) 40%,
          rgba(255,255,255,0.50) 100%
          )
        `,
        backdropFilter: "blur(40px)"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20
        }}
      >
        <ThemeSwitcher />
        <LanguageSwitcher />
      </Box>

      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </Box>
  );
}
