import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Fade,
  BottomNavigation,
  BottomNavigationAction
} from "@mui/material";
import { Contacts, Chat, Settings } from "@mui/icons-material";
import PageHeader from "@/components/PageHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useSideMenuContext } from "@/contexts/SideMenuContext";
import { ContactList } from "./items/ContactList";
import { ChatList } from "./items/ChatList";
import { SettingList } from "./items/SettingList";
import { I18nKeys } from "@/i18n";

// Tab items configuration
const tabItems = [
  {
    titleI18nKey: I18nKeys.contacts.title,
    path: "/contacts",
    icon: <Contacts />,
    component: <ContactList />
  },
  {
    titleI18nKey: I18nKeys.chats.title,
    path: "/chats",
    icon: <Chat />,
    component: <ChatList />
  },
  {
    titleI18nKey: I18nKeys.settings.title,
    path: "/settings",
    icon: <Settings />,
    component: <SettingList />
  }
];

// Main Left Menu Component
export default function Index() {
  const { t } = useTranslation();

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
    setHeaderProps({
      titleI18nKey: tabItems[selected].titleI18nKey
    });
  }, [selected]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
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
            key={item.titleI18nKey}
            value={index}
            label={t(item.titleI18nKey)}
            aria-label={t(item.titleI18nKey)}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
