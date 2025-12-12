import { z } from "zod";
import { I18nKeys } from "@/i18n";

export const passwordSchema = z
  .string()
  .refine((val) => val.trim() === val, {
    message: I18nKeys.auth.error.noLeadingTrailingSpaces
  })
  .min(8, I18nKeys.auth.error.shortPassword)
  .regex(/[A-Z]/, I18nKeys.auth.error.uppercaseRequired)
  .regex(/[a-z]/, I18nKeys.auth.error.lowercaseRequired)
  .regex(/[0-9]/, I18nKeys.auth.error.numberRequired)
  .regex(/[^A-Za-z0-9]/, I18nKeys.auth.error.specialCharRequired);
