const fs = require("fs")

function manifest(obj, { options }) {
  obj.main = options.main
}

function beforeBuild() {
  const dir = "./pkg"
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

module.exports = { manifest, beforeBuild }
