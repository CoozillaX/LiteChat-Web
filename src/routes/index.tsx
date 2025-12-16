import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import AuthRoutes from "./auth";
import ContactRoutes from "./contacts";
import ChatRoutes from "./chats";
import SettingRoutes from "./settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {AuthRoutes}
      <Route path="/" element={<MainLayout />}>
        <Route index handle={{ isEmptyPage: true }} element={<></>} />
        {ContactRoutes}
        {ChatRoutes}
        {SettingRoutes}
        <Route path="*" element={<Navigate to=".." replace />} />
      </Route>
    </>
  )
);

export default router;
