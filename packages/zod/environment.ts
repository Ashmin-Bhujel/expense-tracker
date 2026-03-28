import * as z from "zod";

// * Schemas
export const apiEnvironmentZodSchema = z.object({
  // * Node
  NODE_ENV: z
    .enum(["development", "production"], "Please set the valid NODE_ENV")
    .default("production"),
  // * Server
  PORT: z.string("Please set the server PORT").default("5000"),
  CORS_ORIGIN: z.string("Please set the CORS_ORIGIN"),
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
