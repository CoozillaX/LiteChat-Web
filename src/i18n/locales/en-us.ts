import eMartI18nEn from "@emoji-mart/data/i18n/en.json";
import { I18nKeys } from "../keys";

export default {
  [I18nKeys.languageName]: "English",

  // ===================== LAYOUT =====================
  [I18nKeys.layout.main.emptyState]:
    "Select an option to get started with LiteChat",

  // ===================== AUTH =====================
  [I18nKeys.auth.error.invalidEmail]: "Please enter a valid email address.",
  [I18nKeys.auth.error.shortPassword]:
    "Password must be at least 8 characters long.",
  [I18nKeys.auth.error.noLeadingTrailingSpaces]:
    "Password must not have leading or trailing spaces.",
  [I18nKeys.auth.error.uppercaseRequired]:
    "Password must contain at least one uppercase letter.",
  [I18nKeys.auth.error.lowercaseRequired]:
    "Password must contain at least one lowercase letter.",
  [I18nKeys.auth.error.numberRequired]:
    "Password must contain at least one number.",
  [I18nKeys.auth.error.specialCharRequired]:
    "Password must contain at least one special character.",

  // ===================== TURNSTILE =====================
  [I18nKeys.turnstile.executing]: "Waiting for Turnstile...",
  [I18nKeys.turnstile.error.invalidToken]:
    "The Turnstile verification token is invalid. Please complete the challenge again.",

  // ==================== EMOJI PICKER =====================
  [I18nKeys.emojiPicker.root]: eMartI18nEn,

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
  [I18nKeys.forgotPassword.submit]: "Send Password Reset Email",
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
  [I18nKeys.resetPassword.error.invalidLink]:
    "The password reset link is invalid or has expired. Please request a new link to continue.",
  [I18nKeys.resetPassword.error.passwordsDoNotMatch]:
    "The passwords entered do not match.",

  // ===================== REQUEST SIGNUP =====================
  [I18nKeys.requestSignup.title]: "Sign up for LiteChat",
  [I18nKeys.requestSignup.subtitle]:
    "Enter your email and we'll send you a link to create your account.",
  [I18nKeys.requestSignup.email]: "Email",
  [I18nKeys.requestSignup.submit]: "Send Sign-up Email",
  [I18nKeys.requestSignup.login]: "Back to Login",
  [I18nKeys.requestSignup.success.requestSent]:
    "A sign-up link has been sent to your email address.",

  // ===================== COMPLETE SIGNUP =====================
  [I18nKeys.completeSignup.title]: "Sign Up for LiteChat",
  [I18nKeys.completeSignup.subtitle]:
    "You need to provide some additional information to complete your sign-up.",
  [I18nKeys.completeSignup.firstName]: "First Name",
  [I18nKeys.completeSignup.lastName]: "Last Name (Optional)",
  [I18nKeys.completeSignup.password]: "Password",
  [I18nKeys.completeSignup.confirmPassword]: "Confirm Password",
  [I18nKeys.completeSignup.submit]: "Create Account",
  [I18nKeys.completeSignup.login]: "Back to Login",
  [I18nKeys.completeSignup.error.invalidLink]:
    "The sign-up link is invalid or has expired. Please request a new link to continue.",
  [I18nKeys.completeSignup.error.firstNameRequired]: "First name is required.",
  [I18nKeys.completeSignup.error.firstNameMaxLengthExceeded]:
    "First name must be at most 20 characters.",
  [I18nKeys.completeSignup.error.lastNameMaxLengthExceeded]:
    "Last name must be at most 20 characters.",
  [I18nKeys.completeSignup.error.passwordsDoNotMatch]:
    "The passwords entered do not match.",
  [I18nKeys.completeSignup.success.signupComplete]:
    "You have successfully completed sign-up! Welcome to LiteChat!",

  // ===================== CONTACTS =====================
  [I18nKeys.contacts.title]: "Contacts",
  [I18nKeys.contacts.searchPlaceholder]: "Search",

  // ===================== CHATS =====================
  [I18nKeys.chats.title]: "Chats",
  [I18nKeys.chats.searchPlaceholder]: "Search",

  // ===================== SETTINGS =====================
  [I18nKeys.settings.title]: "Settings",
  [I18nKeys.settings.profile.title]: "Profile",
  [I18nKeys.settings.profile.avatar.title]: "Edit Avatar",
  [I18nKeys.settings.profile.personalInfo.firstNameTitle]: "First Name",
  [I18nKeys.settings.profile.personalInfo.firstNamePlaceholder]:
    "Enter your first name",
  [I18nKeys.settings.profile.personalInfo.lastNameTitle]: "Last Name",
  [I18nKeys.settings.profile.personalInfo.lastNamePlaceholder]:
    "Enter your last name",
  [I18nKeys.settings.profile.bio.title]: "Bio",
  [I18nKeys.settings.profile.bio.placeholder]: "Tell us about yourself",
  [I18nKeys.settings.profile.logout]: "Log Out",
  [I18nKeys.settings.appearance.title]: "Appearance",
  [I18nKeys.settings.appearance.theme.title]: "Theme",
  [I18nKeys.settings.appearance.theme.darkMode]: "Dark Mode",
  [I18nKeys.settings.appearance.theme.autoDarkMode]: "Match System",
  [I18nKeys.settings.language.title]: "Language",
  [I18nKeys.settings.language.selectLanguage]: "Language"
};
