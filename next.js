module.exports = {
  extends: ["./react.js"],
  overrides: [
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
  },
}
