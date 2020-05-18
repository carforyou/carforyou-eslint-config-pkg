module.exports = {
  extends: ["./index.js"],
  overrides: [
    {
      files: ["packMain.js"],
      parser: "esprima",
    },
  ],
}
