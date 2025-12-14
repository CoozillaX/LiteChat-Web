import { I18nKeys } from "../keys";

export default {
  [I18nKeys.languageName]: "中文",

  // ===================== LAYOUT =====================
  [I18nKeys.layout.main.emptyState]: "选择一个选项来开始使用 LiteChat",

  // ===================== AUTH =====================
  [I18nKeys.auth.error.invalidEmail]: "请输入有效的邮箱地址。",
  [I18nKeys.auth.error.shortPassword]: "密码长度至少为 8 个字符。",
  [I18nKeys.auth.error.noLeadingTrailingSpaces]: "密码开头和结尾不能包含空格。",
  [I18nKeys.auth.error.uppercaseRequired]: "密码必须包含至少一个大写字母。",
  [I18nKeys.auth.error.lowercaseRequired]: "密码必须包含至少一个小写字母。",
  [I18nKeys.auth.error.numberRequired]: "密码必须包含至少一个数字。",
  [I18nKeys.auth.error.specialCharRequired]: "密码必须包含至少一个特殊字符。",

  // ===================== TURNSTILE =====================
  [I18nKeys.turnstile.executing]: "正在等待 Turnstile...",
  [I18nKeys.turnstile.error.invalidToken]:
    "Turnstile 验证令牌无效。请重新完成验证挑战。",

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
  [I18nKeys.requestSignup.success.requestSent]: "注册链接已发送到您的邮箱。",

  // ===================== COMPLETE SIGNUP =====================
  [I18nKeys.completeSignup.title]: "注册 LiteChat",
  [I18nKeys.completeSignup.subtitle]: "您需要提供一些额外的信息以完成注册。",
  [I18nKeys.completeSignup.firstName]: "名",
  [I18nKeys.completeSignup.lastName]: "姓 (可选)",
  [I18nKeys.completeSignup.password]: "密码",
  [I18nKeys.completeSignup.confirmPassword]: "确认密码",
  [I18nKeys.completeSignup.submit]: "完成注册",
  [I18nKeys.completeSignup.login]: "返回登录",
  [I18nKeys.completeSignup.error.invalidLink]:
    "注册链接无效或已过期，请尝试获取新的链接以继续操作。",
  [I18nKeys.completeSignup.error.firstNameRequired]: "请输入您的名字。",
  [I18nKeys.completeSignup.error.passwordsDoNotMatch]: "两次输入的密码不匹配。",
  [I18nKeys.completeSignup.success.signupComplete]:
    "您已完成注册！欢迎使用 LiteChat！",

  // ===================== CONTACTS =====================
  [I18nKeys.contacts.title]: "联系人",
  [I18nKeys.contacts.searchPlaceholder]: "搜索",

  // ===================== CHATS =====================
  [I18nKeys.chats.title]: "聊天",
  [I18nKeys.chats.searchPlaceholder]: "搜索",

  // ===================== SETTINGS =====================
  [I18nKeys.settings.title]: "设置",
  [I18nKeys.settings.appearance.title]: "外观",
  [I18nKeys.settings.appearance.darkMode]: "深色模式",
  [I18nKeys.settings.language.title]: "语言",
  [I18nKeys.settings.language.selectLanguage]: "切换语言"
};
