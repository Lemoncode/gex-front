import eslintJs from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";

const { configs: eslintConfigs } = eslintJs;

export default [
  eslintConfigs.recommended,
  {
    files: ["**/*.{ts,tsx}"], 
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "off", 
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "warn", 
    },
    settings: {
      react: {
        version: "detect", 
        jsxRuntime: "automatic",
      },
    },
  },
  {
    ignores: ["node_modules/**", "dist/**"], 
  },
];
