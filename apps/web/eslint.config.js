import webConfig from "@expense-tracker/eslint-config/web.js";
import { defineConfig } from "eslint/config";

export default defineConfig([{ extends: [webConfig] }]);
