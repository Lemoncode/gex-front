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
        ...globals.jest
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
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive-deps rule we can use useEffect without dependencies
      "react/react-in-jsx-scope": "off", // Disable react-in-jsx-scope we can use JSX without importing React
      "@typescript-eslint/no-explicit-any": "warn", // Warn when using any type
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React to use
        jsxRuntime: "automatic", // Use React 17 automatic JSX runtime
      },
    },
  },
  {
    ignores: ["node_modules/**", "dist/**"],
  },
];
