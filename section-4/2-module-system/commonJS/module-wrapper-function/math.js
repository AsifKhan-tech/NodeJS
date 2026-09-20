(function (exports, require, module, __filename, __dirname) {
  // 👇 YOUR CODE GOES HERE 👇
  const city = "New Delhi";
  console.log(city);
  module.exports = 12;
  const num = require("./math.js");
  console.log(__dirname);
  console.log(__filename);
})(exports, require, module, __filename, __dirname);
