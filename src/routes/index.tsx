import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route
} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AuthRoutes from "./auth";
import ContactRoutes from "./contacts";
import ChatRoutes from "./chats";
import SettingRoutes from "./settings";
import { useStore } from "@/state/hooks";

const LoginOnlyRoute = () => {
  const user = useStore((state) => state.app.user);
  const isRehydrated = useStore((state) => state._persist?.rehydrated);

  if (!isRehydrated) return null;

  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {AuthRoutes}
      <Route element={<LoginOnlyRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index handle={{ isEmptyPage: true }} element={<></>} />
          {ContactRoutes}
          {ChatRoutes}
          {SettingRoutes}
          <Route path="*" element={<Navigate to=".." replace />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
