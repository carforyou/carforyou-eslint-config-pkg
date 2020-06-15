module.exports = {
  env: {
    node: true,
    es2020: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:jest/recommended",
    "plugin:json/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "jest",
    "prettier",
    "import",
    "json",
  ],
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "memberLike",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variableLike",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        filter: {
          regex: "^__html$",
          match: true,
        },
      },
      {
        selector: "method",
        format: null,
        filter: {
          regex: "^UNSAFE_",
          match: true,
        },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, variables: false },
    ],
    "no-shadow": "error",
    "prettier/prettier": "error",
    "sort-keys": "off",
    "no-console": "error",
    "json/*": "error",
  },
}
