import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "auth.error.shortPassword")
  .regex(/[A-Z]/, "auth.error.uppercaseRequired")
  .regex(/[a-z]/, "auth.error.lowercaseRequired")
  .regex(/[0-9]/, "auth.error.numberRequired")
  .regex(/[^A-Za-z0-9]/, "auth.error.specialCharRequired");
