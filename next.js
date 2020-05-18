module.exports = {
  env: {
    "cypress/globals": true,
  },
  extends: ["./react.js", "plugin:cypress/recommended"],
  plugins: ["cypress"],
  overrides: [
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
      ],
      rules: {
        // off because of testing library
        "jest/valid-expect": "off",
        "jest/expect-expect": "off",
      },
    },
  ],
  rules: {
    "import/no-internal-modules": [
      "error",
      {
        allow: [
          "**/*.css",
          "@testing-library/**/*",
          "react-dom/*",
          "**/configuration/**/*",
          "**/configuration/*",
          "**/__fixtures__/**/*",
          "**/__fixtures__/*",
          "next/*",
          "next-i18next/*",
        ],
      },
    ],
  },
}
