import * as z from "zod";

// * Schemas
export const apiEnvironmentZodSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production"], "Please set the valid node environment")
    .default("production"),
  PORT: z.coerce
    .number("Please provide a server port number")
    .min(5000, "The server port number should be greater than 5000")
    .max(6000, "The server port number should be less than 6000")
    .default(5000),
});

// * Types
export type APIEnvironmentType = z.infer<typeof apiEnvironmentZodSchema>;
