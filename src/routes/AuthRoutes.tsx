import { Route } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/views/Login";
import ForgotPasswordPage from "@/views/ForgotPassword";
import ResetPasswordPage from "@/views/ResetPassword";

export const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route index element={<LoginPage />} />
    <Route path="forgot-password" element={<ForgotPasswordPage />} />
    <Route path="reset-password" element={<ResetPasswordPage />} />
  </Route>
);
