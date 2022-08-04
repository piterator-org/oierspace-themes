module.exports = {
  env: { node: true },
  extends: ["eslint:recommended", "airbnb-base", "plugin:prettier/recommended"],
  parserOptions: { ecmaVersion: "latest" },
  plugins: ["@typescript-eslint"],
  rules: {},
  overrides: [
    {
      files: "src/**/*",
      extends: [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: { project: "tsconfig.json", tsconfigRootDir: __dirname },
    },
    {
      files: ".*rc.*",
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],
};
