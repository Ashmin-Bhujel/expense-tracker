import { config } from "dotenv";
import * as z from "zod";

// * Dotenv config
config({
  path: [".env", ".env.local"],
});

// * Type definitions
const environmentZodSchema = z.object({
  PORT: z.coerce.number().min(5000).default(5000),
});
type EnvironmentType = z.infer<typeof environmentZodSchema>;

let environment: EnvironmentType = {} as EnvironmentType;

const { success, data, error } = environmentZodSchema.safeParse(process.env);

if (!success) {
  console.log("Invalid environment variables");
  console.log("Error:", error.message);
  process.exit(1);
} else {
  environment = data;
}

export default environment;
