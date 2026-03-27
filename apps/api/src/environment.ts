import type { APIEnvironmentType } from "@expense-tracker/zod/environment";

import { apiEnvironmentZodSchema } from "@expense-tracker/zod/environment";
import { config } from "dotenv";

// * Dotenv config
config({
  path: [".env", ".env.local"],
});

let environment: APIEnvironmentType = {} as APIEnvironmentType;

// * Parsing environment variables
const { success, data, error } = apiEnvironmentZodSchema.safeParse(process.env);

if (!success) {
  console.log("Invalid environment variables for API");
  console.log("Issues:", error.issues);
  process.exit(1);
} else {
  environment = data;
}

export default environment;
