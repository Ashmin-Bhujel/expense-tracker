import apiConfig from "@expense-tracker/eslint-config/api.js";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [apiConfig] }]);
