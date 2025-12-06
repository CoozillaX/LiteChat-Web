import { I18nKeys } from "../keys";

export default {
  [I18nKeys.languageName]: "English",

  // ===================== AUTH =====================
  [I18nKeys.auth.error.invalidEmail]: "Please enter a valid email address.",
  [I18nKeys.auth.error.shortPassword]:
    "Password must be at least 8 characters long.",
  [I18nKeys.auth.error.uppercaseRequired]:
    "Password must contain at least one uppercase letter.",
  [I18nKeys.auth.error.lowercaseRequired]:
    "Password must contain at least one lowercase letter.",
  [I18nKeys.auth.error.numberRequired]:
    "Password must contain at least one number.",
  [I18nKeys.auth.error.specialCharRequired]:
    "Password must contain at least one special character.",

  // ===================== LOGIN =====================
  [I18nKeys.login.title]: "Sign in to LiteChat",
  [I18nKeys.login.email]: "Email",
  [I18nKeys.login.password]: "Password",
  [I18nKeys.login.forgotPassword]: "Forgot Password?",
  [I18nKeys.login.submit]: "Sign In",
  [I18nKeys.login.passkey]: "Continue with Passkey",
  [I18nKeys.login.signup]: "New to LiteChat? <0>Create an account</0>",
  [I18nKeys.login.error.invalidCredentials]:
    "Invalid credentials, please try again.",

  // ===================== FORGOT PASSWORD =====================
  [I18nKeys.forgotPassword.title]: "Forgot Password",
  [I18nKeys.forgotPassword.subtitle]:
    "Enter your email address and we'll send you a link to reset your password.",
  [I18nKeys.forgotPassword.email]: "Email",
  [I18nKeys.forgotPassword.submit]: "Send password reset email",
  [I18nKeys.forgotPassword.login]: "Back to Login",

  [I18nKeys.forgotPassword.success.emailSent]:
    "A password reset link has been sent to your email address.",

  // ===================== RESET PASSWORD =====================
  [I18nKeys.resetPassword.title]: "Reset Password",
  [I18nKeys.resetPassword.subtitle]:
    "Enter your new password to reset your account password.",
  [I18nKeys.resetPassword.newPassword]: "New Password",
  [I18nKeys.resetPassword.confirmPassword]: "Confirm New Password",
  [I18nKeys.resetPassword.submit]: "Reset Password",
  [I18nKeys.resetPassword.login]: "Back to Login",

  [I18nKeys.resetPassword.success.passwordReset]:
    "Your password has been successfully reset.",

  [I18nKeys.resetPassword.error.passwordsDoNotMatch]:
    "The passwords entered do not match."
};
