import z from "zod";
import { completeSignupSchema } from "@/views/CompleteSignup/schema";

export const profileSchema = completeSignupSchema
  .pick({
    firstName: true,
    lastName: true
  })
  .extend({
    bio: z.string().max(160)
  });
