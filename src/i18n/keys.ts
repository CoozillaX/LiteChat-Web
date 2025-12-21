export const I18nKeys = {
  languageName: "languageName",

  layout: {
    main: {
      emptyState: "layout.main.emptyState"
    }
  },

  auth: {
    error: {
      invalidEmail: "auth.error.invalidEmail",
      shortPassword: "auth.error.shortPassword",
      noLeadingTrailingSpaces: "auth.error.noLeadingTrailingSpaces",
      uppercaseRequired: "auth.error.uppercaseRequired",
      lowercaseRequired: "auth.error.lowercaseRequired",
      numberRequired: "auth.error.numberRequired",
      specialCharRequired: "auth.error.specialCharRequired"
    }
  },

  turnstile: {
    executing: "turnstile.executing",
    error: {
      invalidToken: "turnstile.error.invalidToken"
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
  },

  requestSignup: {
    title: "requestSignup.title",
    subtitle: "requestSignup.subtitle",
    email: "requestSignup.email",
    submit: "requestSignup.submit",
    login: "requestSignup.login",
    success: {
      requestSent: "requestSignup.success.requestSent"
    }
  },

  completeSignup: {
    title: "completeSignup.title",
    subtitle: "completeSignup.subtitle",
    firstName: "completeSignup.firstName",
    lastName: "completeSignup.lastName",
    password: "completeSignup.password",
    confirmPassword: "completeSignup.confirmPassword",
    submit: "completeSignup.submit",
    login: "completeSignup.login",
    error: {
      invalidLink: "completeSignup.error.invalidLink",
      firstNameRequired: "completeSignup.error.firstNameRequired",
      firstNameMaxLengthExceeded: "completeSignup.error.firstNameMaxLengthExceeded",
      lastNameMaxLengthExceeded: "completeSignup.error.lastNameMaxLengthExceeded",
      passwordsDoNotMatch: "completeSignup.error.passwordsDoNotMatch"
    },
    success: {
      signupComplete: "completeSignup.success.signupComplete"
    }
  },

  contacts: {
    title: "contacts.title",
    searchPlaceholder: "contacts.searchPlaceholder"
  },

  chats: {
    title: "chats.title",
    searchPlaceholder: "chats.searchPlaceholder"
  },

  settings: {
    title: "settings.title",
    profile: {
      title: "settings.profile.title",
      avatar: {
        title: "settings.profile.avatar"
      },
      personalInfo: {
        firstNameTitle: "settings.profile.personalInfo.firstNameTitle",
        firstNamePlaceholder: "settings.profile.personalInfo.fistNamePlaceholder",
        lastNameTitle: "settings.profile.personalInfo.lastNameTitle",
        lastNamePlaceholder: "settings.profile.personalInfo.lastNamePlaceholder"
      },
      bio: {
        title: "settings.profile.bio.title",
        placeholder: "settings.profile.bio.placeholder"
      },
      logout: "settings.profile.logout"
    },
    appearance: {
      title: "settings.appearance.title",
      darkMode: "settings.appearance.darkMode"
    },
    language: {
      title: "settings.language.title",
      selectLanguage: "settings.language.selectLanguage"
    }
  }
} as const;

export type I18nKey = typeof I18nKeys;
