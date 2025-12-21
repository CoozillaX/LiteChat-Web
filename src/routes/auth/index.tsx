import { Navigate, Route } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/views/Login";
import RequestSignup from "@/views/RequestSignup";
import CompleteSignup from "@/views/CompleteSignup";
import ForgotPassword from "@/views/ForgotPassword";
import ResetPassword from "@/views/ResetPassword";

const AuthRoutes = (
  <Route path="auth" element={<AuthLayout />}>
    <Route index element={<Navigate to="login" replace />} />
    <Route path="login" element={<Login />} />
    <Route path="request-signup" element={<RequestSignup />} />
    <Route path="complete-signup" element={<CompleteSignup />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="reset-password" element={<ResetPassword />} />
  </Route>
);

export default AuthRoutes;
