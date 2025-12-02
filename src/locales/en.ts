export default {
  languageName: "English",
  auth: {
    error: {
      invalidEmail: "Please enter a valid email address.",
      invalidCredentials: "Invalid credentials, please try again.",
      shortPassword: "Password must be at least 8 characters long.",
      uppercaseRequired: "Password must contain at least one uppercase letter.",
      lowercaseRequired: "Password must contain at least one lowercase letter.",
      numberRequired: "Password must contain at least one number.",
      specialCharRequired:
        "Password must contain at least one special character."
    }
  },
  login: {
    title: "Sign in to LiteChat",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot Password?",
    submit: "Sign In",
    passkey: "Continue with Passkey",
    signup: "New to LiteChat? <0>Create an account</0>"
  },
  forgotPassword: {
    title: "Forgot Password",
    subtitle:
      "Enter your email address and we'll send you a link to reset your password.",
    email: "Email",
    submit: "Send password reset email",
    login: "Back to Login",
    success: {
      emailSent: "A password reset link has been sent to your email address."
    }
  }
};
