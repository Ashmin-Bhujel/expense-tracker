import { defineConfig, globalIgnores } from "eslint/config";
import api from "./apps/api/eslint.config.js";
import web from "./apps/web/eslint.config.js";

export default defineConfig([globalIgnores(["dist", "node_modules", ".turbo"]), ...api, ...web]);
