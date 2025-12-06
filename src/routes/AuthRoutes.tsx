import { Route } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/views/Login";
import RequestSignupPage from "@/views/RequestSignup";
import CompleteSignupPage from "@/views/CompleteSignup";
import ForgotPasswordPage from "@/views/ForgotPassword";
import ResetPasswordPage from "@/views/ResetPassword";

export const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route index element={<LoginPage />} />
    <Route path="request-signup" element={<RequestSignupPage />} />
    <Route path="complete-signup" element={<CompleteSignupPage />} />
    <Route path="forgot-password" element={<ForgotPasswordPage />} />
    <Route path="reset-password" element={<ResetPasswordPage />} />
  </Route>
);
