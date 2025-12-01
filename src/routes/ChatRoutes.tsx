import { Route } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import ChatPage from "@/views/Chat";

export const ChatRoutes = (
  <Route element={<MainLayout />}>
    <Route path="/chat" element={<ChatPage />} />
  </Route>
);
