import { PageHeader } from "@/components/PageHeader";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function SettingLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "background.default"
      }}
    >
      {/* Header */}
      <PageHeader title="Appearance" />

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          width: 1,
          maxWidth: 900,
          px: 10,
          bgcolor: "background.secondary",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
