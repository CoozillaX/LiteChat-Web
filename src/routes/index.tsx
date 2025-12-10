import { Routes } from "react-router-dom";
import { MainRoutes } from "@/routes/MainRoutes";
import { AuthRoutes } from "@/routes/AuthRoutes";

export function AppRoutes() {
  return (
    <Routes>
      {AuthRoutes}
      {MainRoutes}
    </Routes>
  );
}
