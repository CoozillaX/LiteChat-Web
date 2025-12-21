import { z } from "zod";
import { I18nKeys } from "@/i18n";
import { passwordSchema } from "@/utils/schemas";

export const completeSignupSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, I18nKeys.completeSignup.error.firstNameRequired)
      .max(20, I18nKeys.completeSignup.error.firstNameMaxLengthExceeded),
    lastName: z
      .string()
      .trim()
      .max(20, I18nKeys.completeSignup.error.lastNameMaxLengthExceeded),
    password: passwordSchema,
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: I18nKeys.completeSignup.error.passwordsDoNotMatch
  });

export type CompleteSignupSchemaValues = z.infer<typeof completeSignupSchema>;
