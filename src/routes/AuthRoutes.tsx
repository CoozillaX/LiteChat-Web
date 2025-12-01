import { Route } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/views/Login";

export const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route index element={<LoginPage />} />
  </Route>
);
