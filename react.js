module.exports = {
  env: {
    node: true,
    browser: true,
    "shared-node-browser": true,
  },
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "prettier/react",
  ],
  plugins: ["react", "testing-library"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
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
        allow: ["**/*.css", "@testing-library/**/*", "react-dom/*"],
      },
    ],
  },
}
