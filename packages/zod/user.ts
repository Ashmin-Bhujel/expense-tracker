import * as z from "zod";

// * Schemas
export const userZodSchema = z.object({
  id: z.string(),
  username: z.string("Please provide username"),
  fullname: z.string("Please provide fullname for the user"),
  email: z.email("Please provide valid email for the user"),
  password: z
    .string("Please provide password for the user")
    .min(8, "Password must have minimum length of 8"),
  avatarURL: z.string().default("").optional(),
  dateOfBirth: z.coerce.date("Please provide date of birth for the user"),
});
export const createUserZodSchema = userZodSchema.omit({
  id: true,
});
export const updateUserZodSchema = createUserZodSchema.partial();

// * Types
export type UserType = z.infer<typeof userZodSchema>;
export type CreateUserType = z.infer<typeof createUserZodSchema>;
export type UpdateUserType = z.infer<typeof updateUserZodSchema>;
