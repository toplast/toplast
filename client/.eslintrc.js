module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-import-assign": "error",
    "no-duplicate-imports": "error",
    "sort-imports": ["error", { ignoreCase: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
