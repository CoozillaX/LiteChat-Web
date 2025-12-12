import { z } from "zod";
import { I18nKeys } from "@/i18n";
import { passwordSchema } from "./password";

export const loginSchema = z.object({
  email: z.email(I18nKeys.auth.error.invalidEmail),
  password: passwordSchema
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
