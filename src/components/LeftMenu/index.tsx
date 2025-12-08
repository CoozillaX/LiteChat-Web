import { useState } from "react";
import { Tabs, Tab, Box, Fade } from "@mui/material";
import { Contacts, Chat, Settings } from "@mui/icons-material";
import ContactList from "./ContactList";
import ChatList from "./ChatList";

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
    component: <div>Item Three</div>
  }
];

export default function IconTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        userSelect: "none"
      }}
    >
      <Box sx={{ flex: 1, overflow: "hidden" }}>
        {tabItems.map((item, index) => (
          <Fade key={index} in={value === index} timeout={200}>
            <Box hidden={value !== index} sx={{ height: 1 }}>
              {item.component}
            </Box>
          </Fade>
        ))}
      </Box>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          flexShrink: 0
        }}
      >
        {tabItems.map((item, index) => (
          <Tab key={index} icon={item.icon} aria-label={item.label} />
        ))}
      </Tabs>
    </Box>
  );
}
