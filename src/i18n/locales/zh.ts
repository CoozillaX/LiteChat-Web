import { I18nKeys } from "../keys";

export default {
  [I18nKeys.languageName]: "中文",

  // ===================== AUTH =====================
  [I18nKeys.auth.error.invalidEmail]: "请输入有效的邮箱地址。",
  [I18nKeys.auth.error.shortPassword]: "密码长度至少为 8 个字符。",
  [I18nKeys.auth.error.uppercaseRequired]: "密码必须包含至少一个大写字母。",
  [I18nKeys.auth.error.lowercaseRequired]: "密码必须包含至少一个小写字母。",
  [I18nKeys.auth.error.numberRequired]: "密码必须包含至少一个数字。",
  [I18nKeys.auth.error.specialCharRequired]: "密码必须包含至少一个特殊字符。",

  // ===================== LOGIN =====================
  [I18nKeys.login.title]: "登录 LiteChat",
  [I18nKeys.login.email]: "邮箱",
  [I18nKeys.login.password]: "密码",
  [I18nKeys.login.forgotPassword]: "忘记密码？",
  [I18nKeys.login.submit]: "登录",
  [I18nKeys.login.passkey]: "使用密钥继续",
  [I18nKeys.login.signup]: "初次使用 LiteChat？<0>创建一个账号</0>",
  [I18nKeys.login.error.invalidCredentials]: "无效的凭据，请重试。",

  // ===================== FORGOT PASSWORD =====================
  [I18nKeys.forgotPassword.title]: "找回密码",
  [I18nKeys.forgotPassword.subtitle]:
    "请输入您的邮箱地址，我们会向您发送一封包含重置密码链接的邮件。",
  [I18nKeys.forgotPassword.email]: "邮箱",
  [I18nKeys.forgotPassword.submit]: "发送重置密码邮件",
  [I18nKeys.forgotPassword.login]: "返回登录",
  [I18nKeys.forgotPassword.success.emailSent]: "密码重置链接已发送到您的邮箱。",

  // ===================== RESET PASSWORD =====================
  [I18nKeys.resetPassword.title]: "重置密码",
  [I18nKeys.resetPassword.subtitle]: "请输入您的新密码以重置您的账户密码。",
  [I18nKeys.resetPassword.newPassword]: "新密码",
  [I18nKeys.resetPassword.confirmPassword]: "确认新密码",
  [I18nKeys.resetPassword.submit]: "重置密码",
  [I18nKeys.resetPassword.login]: "返回登录",
  [I18nKeys.resetPassword.success.passwordReset]: "您的密码已成功重置。",
  [I18nKeys.resetPassword.error.invalidLink]:
    "密码重置链接无效或已过期，请尝试获取新的链接以继续操作。",
  [I18nKeys.resetPassword.error.passwordsDoNotMatch]: "两次输入的密码不匹配。",

  // ===================== REQUEST SIGNUP =====================
  [I18nKeys.requestSignup.title]: "注册 LiteChat",
  [I18nKeys.requestSignup.subtitle]:
    "请输入您的邮箱，我们会向您发送一封包含注册链接的邮件。",
  [I18nKeys.requestSignup.email]: "邮箱",
  [I18nKeys.requestSignup.submit]: "发送注册邮件",
  [I18nKeys.requestSignup.login]: "返回登录",
  [I18nKeys.requestSignup.success.requestSent]:
    "注册链接已发送到您的邮箱。",
};
