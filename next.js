module.exports = {
  extends: ["./react.js"],
  overrides: [
    {
      files: ["next.config.js"],
      parser: "@typescript-eslint/parser",
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
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("./shared.js").whitelistedImports,
          "**/configuration/**/*",
          "**/configuration/*",
          "next/*",
          "next-i18next/*",
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "next/link",
            message: "Please use AppLink component instead",
          },
          {
            name: "next/router",
            importNames: ["default"],
            message: "Please use router from next-routes instead",
          },
        ],
      },
    ],
  },
}
