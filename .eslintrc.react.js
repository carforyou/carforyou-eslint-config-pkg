module.exports = {
  extends: ["./react.js"],
  overrides: [
    {
      files: ["packMain.js"],
      parser: "esprima",
    },
  ],
}
