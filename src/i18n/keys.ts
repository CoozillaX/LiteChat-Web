export const I18nKeys = {
  languageName: "languageName",

  auth: {
    error: {
      invalidEmail: "auth.error.invalidEmail",
      shortPassword: "auth.error.shortPassword",
      uppercaseRequired: "auth.error.uppercaseRequired",
      lowercaseRequired: "auth.error.lowercaseRequired",
      numberRequired: "auth.error.numberRequired",
      specialCharRequired: "auth.error.specialCharRequired"
    }
  },

  login: {
    title: "login.title",
    email: "login.email",
    password: "login.password",
    forgotPassword: "login.forgotPassword",
    submit: "login.submit",
    passkey: "login.passkey",
    signup: "login.signup",
    error: {
      invalidCredentials: "login.error.invalidCredentials"
    }
  },

  forgotPassword: {
    title: "forgotPassword.title",
    subtitle: "forgotPassword.subtitle",
    email: "forgotPassword.email",
    submit: "forgotPassword.submit",
    login: "forgotPassword.login",
    success: {
      emailSent: "forgotPassword.success.emailSent"
    }
  },

  resetPassword: {
    title: "resetPassword.title",
    subtitle: "resetPassword.subtitle",
    newPassword: "resetPassword.newPassword",
    confirmPassword: "resetPassword.confirmPassword",
    submit: "resetPassword.submit",
    login: "resetPassword.login",
    success: {
      passwordReset: "resetPassword.success.passwordReset"
    },
    error: {
      invalidLink: "resetPassword.error.invalidLink",
      passwordsDoNotMatch: "resetPassword.error.passwordsDoNotMatch"
    }
  }
} as const;

export type I18nKey = typeof I18nKeys;
