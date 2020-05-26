module.exports = {
  env: {
    node: true,
    browser: true,
    "shared-node-browser": true,
    "cypress/globals": true,
  },
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:cypress/recommended",
    "prettier/react",
  ],
  plugins: ["react", "testing-library", "cypress"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["tailwind.config.js"],
      parser: "@typescript-eslint/parser",
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
      files: ["*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    {
      files: ["**/components/**/*.test.tsx", "**/components/**/*.test.jsx"],
      rules: {
        // off because of testing library
        "jest/valid-expect": "off",
        "jest/expect-expect": "off",
      },
    },
  ],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-internal-modules": [
      "error",
      {
        allow: require("./shared.js").whitelistedImports,
      },
    ],
  },
}
