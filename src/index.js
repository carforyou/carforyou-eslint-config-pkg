module.exports = {
  env: {
    browser: true,
    node: true,
    "shared-node-browser": true,
    "cypress/globals": true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:json/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "react",
    "cypress",
    "jest",
    "testing-library",
    "prettier",
    "import",
    "json",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["**/cypress/**/*"],
      rules: {
        "jest/expect-expect": "off",
        "jest/valid-expect-in-promise": "off",
        "jest/valid-expect": "off",
        "jest/no-standalone-expect": "off",
        "testing-library/await-async-query": "off",
      },
    },
    {
      files: [
        "**/__tests__/next/**/*.test.tsx",
        "**/__tests__/pages/**/*.test.tsx",
        "**/__tests__/pages/**/*.test.jsx",
        "**/components/**/*.test.tsx",
        "**/components/**/*.test.jsx",
      ],
      rules: {
        // off because of testing library
        "jest/valid-expect": "off",
        "jest/expect-expect": "off",
      },
    },
    {
      files: [
        "babel.config.js",
        "jest.config.js",
        "release.config.js",
        ".eslintrc.js",
        "*.json",
      ],
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
      },
      {
        selector: "typeLike",
        format: ["PascalCase"]
      },
    ],
    "react/prop-types": "off",
    "react/display-name": "off",
    "jest/no-mocks-import": "off",
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
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "next/link",
            message: 'Please import from "~/components/appLink.tsx" instead.',
          },
          {
            name: "next/router",
            importNames: ["default"],
            message: 'Please import from "~/server/routing/routes.ts" instead.',
          },
        ],
      },
    ],
    // TODO: we had that enabled but also disabled on in multiple files
    "sort-keys": "off",
    "import/no-internal-modules": [
      "error",
      {
        allow: [
          "**/*.css",
          "**/configuration/**/*",
          "**/configuration/*",
          "**/__fixtures__/**/*",
          "**/__fixtures__/*",
          "@testing-library/**/*",
          "next/*",
          "next-i18next/*",
          "react-dom/*",
        ],
      },
    ],
    "json/*": ["error", "allowComments"],
    "react-hooks/exhaustive-deps": "off",
  },
}
