import { createContext, useContext, useState } from "react";
import {
  Box,
  Fade,
  BottomNavigation,
  BottomNavigationAction
} from "@mui/material";
import { Contacts, Chat, Settings } from "@mui/icons-material";
import PageHeader, { type PageHeaderProps } from "@/components/PageHeader";
import { ContactList, ChatList, SettingList } from "./items";
import { useLocation } from "react-router-dom";

// Tab items configuration
const tabItems = [
  {
    label: "Contacts",
    icon: <Contacts />,
    component: <ContactList />
  },
  {
    label: "Chats",
    icon: <Chat />,
    component: <ChatList />
  },
  {
    label: "Settings",
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

// Left menu header context
type LeftMenuContextType = {
  setHeader: (config: Partial<PageHeaderProps>) => void;
};

const LeftMenuContext = createContext<LeftMenuContextType | null>(null);

export function useLeftMenuContext() {
  const context = useContext(LeftMenuContext);
  if (!context) {
    throw new Error(
      "useLeftMenuContext must be used within a LeftMenuContext.Provider"
    );
  }
  return context;
}

// Main Left Menu Component
export default function IconTabs() {
  // Get current location
  const location = useLocation();

  // State for selected tab and header configuration
  const [selected, setSelected] = useState(() => {
    const path = location.pathname.toLowerCase();
    const index = tabItems.findIndex((item) =>
      path.startsWith(`/${item.label.toLowerCase()}`)
    );
    return index >= 0 ? index : 0;
  });
  const [headerConfig, setHeaderConfig] = useState<PageHeaderProps>(() =>
    getDefaultHeaderConfig(0)
  );

  // Context value for setting header
  const ctxValue: LeftMenuContextType = {
    setHeader: (config) => {
      const mergedConfig = { ...getDefaultHeaderConfig(selected), ...config };
      setHeaderConfig(mergedConfig);
    }
  };

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
      <PageHeader {...headerConfig} />

      {/* Content */}
      <Box sx={{ flex: 1, overflow: "hidden", bgcolor: "background.level1" }}>
        <LeftMenuContext.Provider value={ctxValue}>
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
        </LeftMenuContext.Provider>
      </Box>

      {/* Bottom Navigation */}
      <BottomNavigation
        value={selected}
        onChange={(_, value: number) => {
          if (value === selected) return;
          setSelected(value);
          setHeaderConfig(getDefaultHeaderConfig(value));
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
