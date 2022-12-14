module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: { project: "tsconfig.json", tsconfigRootDir: __dirname },
    },
  ],
};
