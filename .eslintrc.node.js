module.exports = {
  extends: ["./pkg/react.js"],
  overrides: [
    {
      files: ["packMain.js"],
      parser: "esprima",
    },
  ],
}
