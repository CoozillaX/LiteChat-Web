import { z } from "zod";
import { I18nKeys } from "@/i18n/keys";
import { passwordSchema } from "@/schemas/auth/password";

export const resetPasswordSchema = z
  .object({
    newPassword: passwordSchema,
    confirmPassword: z.string()
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: I18nKeys.resetPassword.error.passwordsDoNotMatch
  });

export type ResetPasswordSchemaValues = z.infer<typeof resetPasswordSchema>;
