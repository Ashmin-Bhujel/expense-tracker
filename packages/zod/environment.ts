import * as z from "zod";

// * Schemas
export const apiEnvironmentZodSchema = z.object({
  // * Node
  NODE_ENV: z
    .enum(["development", "production"], "Please set the valid NODE_ENV")
    .default("production"),
  // * Server
  PORT: z.coerce
    .number("Please set the server PORT")
    .min(5000, "The server PORT number should be greater than 5000")
    .max(6000, "The server PORT number should be less than 6000")
    .default(5000),
  // * MongoDB
  MONGODB_URI: z.string("Please set the MONGODB_URI"),
  MONGODB_DBNAME: z.string("Please set the MONGODB_DBNAME"),
  // * JWT
  JWT_ACCESS_TOKEN_SECRET_KEY: z.string("Please set the JWT_ACCESS_TOKEN_SECRET_KEY"),
  JWT_ACCESS_TOKEN_EXPIRES_IN: z.string("Please set the JWT_ACCESS_TOKEN_EXPIRES_IN"),
  JWT_REFRESH_TOKEN_SECRET_KEY: z.string("Please set the JWT_REFRESH_TOKEN_SECRET_KEY"),
  JWT_REFRESH_TOKEN_EXPIRES_IN: z.string("Please set the JWT_REFRESH_TOKEN_EXPIRES_IN"),
});

// * Types
export type APIEnvironmentType = z.infer<typeof apiEnvironmentZodSchema>;
