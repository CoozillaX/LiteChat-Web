import { Routes } from "react-router-dom";
import { ChatRoutes } from "@/routes/ChatRoutes";
import { AuthRoutes } from "@/routes/AuthRoutes";

export function AppRoutes() {
  return (
    <Routes>
      {AuthRoutes}
      {ChatRoutes}
    </Routes>
  );
}
