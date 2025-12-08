import { useOutlet } from "react-router-dom";
import { Box, Chip, useMediaQuery, useTheme } from "@mui/material";
import LeftMenu from "@/components/LeftMenu";

export default function MainLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const outlet = useOutlet();

  const showLeft = !isMobile || !outlet;
  const showRight = !isMobile || !!outlet;

  return (
    <Box
      sx={{
        display: "flex",
        height: 1
      }}
    >
      <Box
        sx={{
          width: { xs: 1, md: 300 },
          flexShrink: 0,
          overflow: "hidden",
          display: showLeft ? "block" : "none"
        }}
      >
        <LeftMenu />
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: showRight ? "block" : "none",
          position: "relative",
          background: `
            linear-gradient(135deg,
            rgba(79,172,254,0.65) 0%,
            rgba(0,242,254,0.60) 40%,
            rgba(255,255,255,0.50) 100%
            )
          `
        }}
      >
        {outlet ?? (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              userSelect: "none"
            }}
          >
            <Chip label="Please select a chat or option from the left menu." />
          </Box>
        )}
      </Box>
    </Box>
  );
}
