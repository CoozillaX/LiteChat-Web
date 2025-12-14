import { Outlet, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PageHeader from "@/components/PageHeader";
import { useRouteData } from "@/hooks/useRouteData";

export default function Index() {
  const navigate = useNavigate();
  const title = useRouteData<string>("title") || "Settings";

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
      <PageHeader
        title={title}
        leftSlot={
          <IconButton size="small" onClick={() => navigate(".")}>
            <ArrowBack />
          </IconButton>
        }
      />

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
