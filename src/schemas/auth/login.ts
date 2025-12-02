import { z } from "zod";
import { passwordSchema } from "@/schemas/auth/password";

export const loginSchema = z.object({
  email: z.email("auth.error.invalidEmail"),
  password: passwordSchema
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
