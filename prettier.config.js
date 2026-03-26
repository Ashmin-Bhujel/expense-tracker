// @ts-check
/** @type {import("prettier").Config} */

export default {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  trailingComma: "all",
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrder: [
    "<TYPES>^(node:)",
    "<TYPES>",
    "<TYPES>^[.]",
    "",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^[.]",
  ],
  importOrderParserPlugins: ["typescript", "jsx"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: true,
};
