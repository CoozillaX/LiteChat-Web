import { z } from "zod";
import { I18nKeys } from "@/i18n";

export const forgotPasswordSchema = z.object({
  email: z.email(I18nKeys.auth.error.invalidEmail),
});

export type ForgotPasswordSchemaValues = z.infer<typeof forgotPasswordSchema>;
