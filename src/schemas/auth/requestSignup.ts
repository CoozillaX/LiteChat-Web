import { z } from "zod";
import { I18nKeys } from "@/i18n/keys";

export const requestSignupSchema = z.object({
  email: z.email(I18nKeys.auth.error.invalidEmail)
});

export type RequestSignupSchemaValues = z.infer<typeof requestSignupSchema>;
