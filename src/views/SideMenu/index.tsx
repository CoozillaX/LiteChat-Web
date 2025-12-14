import { useEffect, useState } from "react";
import {
  Box,
  Fade,
  BottomNavigation,
  BottomNavigationAction
} from "@mui/material";
import { Contacts, Chat, Settings } from "@mui/icons-material";
import PageHeader, { type PageHeaderProps } from "@/components/PageHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useSideMenuContext } from "@/contexts/SideMenuContext";
import { ContactList } from "./items/ContactList";
import { ChatList } from "./items/ChatList";
import { SettingList } from "./items/SettingList";

// Tab items configuration
const tabItems = [
  {
    label: "Contacts",
    path: "/contacts",
    icon: <Contacts />,
    component: <ContactList />
  },
  {
    label: "Chats",
    path: "/chats",
    icon: <Chat />,
    component: <ChatList />
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Settings />,
    component: <SettingList />
  }
];

// Default header configuration based on selected tab
function getDefaultHeaderConfig(index: number): PageHeaderProps {
  return {
    title: tabItems[index].label
  };
}

// Main Left Menu Component
export default function Index() {
  // Get current location
  const location = useLocation();
  const navigate = useNavigate();

  // State for selected tab and header configuration
  const [selected, setSelected] = useState(() => {
    const path = location.pathname.toLowerCase();
    const index = tabItems.findIndex((item) =>
      path.startsWith(item.path.toLowerCase())
    );
    return index >= 0 ? index : 0;
  });

  // Side menu context
  const { headerProps, setHeaderProps } = useSideMenuContext();

  // Initialize header props on mount
  useEffect(() => {
    setHeaderProps(getDefaultHeaderConfig(selected));
  }, [selected]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        userSelect: "none",
        width: 1
      }}
    >
      {/* Header */}
      <PageHeader {...headerProps} />

      {/* Content */}
      <Box sx={{ flex: 1, overflow: "hidden", bgcolor: "background.level1" }}>
        {tabItems.map((item, index) => (
          <Fade
            key={index}
            in={selected === index}
            timeout={200}
            mountOnEnter
            unmountOnExit
          >
            <Box hidden={selected !== index} sx={{ height: 1 }}>
              {item.component}
            </Box>
          </Fade>
        ))}
      </Box>

      {/* Bottom Navigation */}
      <BottomNavigation
        value={selected}
        onChange={(_, value: number) => {
          if (value === selected) return;
          setSelected(value);
          navigate(tabItems[value].path);
        }}
        sx={{
          borderTop: 1,
          borderColor: "divider",
          "& .MuiBottomNavigationAction-label": {
            fontSize: "0.65rem"
          },
          "& .Mui-selected": {
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.70rem",
              fontWeight: 500
            }
          }
        }}
      >
        {tabItems.map((item, index) => (
          <BottomNavigationAction
            key={item.label}
            value={index}
            label={item.label}
            aria-label={item.label}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
