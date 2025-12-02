import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("auth.error.invalidEmail")
});

export type ForgotPasswordSchemaValues = z.infer<typeof forgotPasswordSchema>;
