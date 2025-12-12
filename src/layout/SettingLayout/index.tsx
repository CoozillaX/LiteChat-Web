import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import PageHeader from "@/components/PageHeader";

export default function Index() {
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
          overflow: "auto"
        }}
      >
        <Box
          sx={{
            width: 1,
            maxWidth: 900,
            mx: "auto"
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
