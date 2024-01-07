/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["dist/", "node_modules/", ".eslintrc.js"],
  overrides: [
    // TypeScript files
    {
      files: ["*.ts"],
      extends: ["plugin:@typescript-eslint/recommended-type-checked"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
    },

    // Test files
    {
      files: ["*.spec.ts"],
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
    },
  ],
};
