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
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    parserOptions: {
      ecmaVersion: 2020,
    },
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
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["*.config.js", ".eslintrc.js", "*.json"],
      parser: "esprima",
    },
  ],
  rules: {
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
    "prettier/prettier": ["error", { semi: false }],
    "prefer-spread": "off",
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    "sort-keys": "off",
    "json/*": ["error", "allowComments"],
  },
}
