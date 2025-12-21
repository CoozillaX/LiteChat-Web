import { z } from "zod";
import { I18nKeys } from "@/i18n";
import { passwordSchema } from "@/utils/schemas";

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
