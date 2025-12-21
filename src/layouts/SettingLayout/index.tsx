import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import PageHeader from "@/components/PageHeader";
import { useRouteData } from "@/routes/hooks";
import { useSettingMenuContext } from "@/contexts";
import { useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const titleI18nKey = useRouteData<string>("titleI18nKey");
  const { headerProps, setHeaderProps } = useSettingMenuContext();

  useEffect(() => {
    setHeaderProps((prevProps) => ({
      ...prevProps,
      titleI18nKey: titleI18nKey,
      leftSlot: (
        <IconButton size="small" onClick={() => {
          // Cannot use navigate('..') here because the ctx is layout but not child route
          const parentPath = location.pathname.split("/").slice(0, -1).join("/") || "/";
          navigate(parentPath);
        }}>
          <ArrowBackIosNew />
        </IconButton>
      )
    }));
  }, [navigate, titleI18nKey, location.pathname]);

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
      <PageHeader {...headerProps} />

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
