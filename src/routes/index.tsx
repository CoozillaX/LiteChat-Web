import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainRoutes } from "@/routes/MainRoutes";
import { AuthRoutes } from "@/routes/AuthRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {AuthRoutes}
      {MainRoutes}
    </>
  )
);

export default router;
