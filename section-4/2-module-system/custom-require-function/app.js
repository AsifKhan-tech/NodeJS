const { sum } = loadModule("./math.js");
console.log(sum(1, 2));

function loadModule(path) {
  const fs = require("fs");
  const fileContent = fs.readFileSync(path).toString();
  //   console.log(fileContent);
  //This return is of the loadModule function
  return (function (send) {
    /*Imagine that the code is written here
    console.log(send);
    console.log("Hey");
*/

    //Code goes here
    eval(fileContent);
    return send;
  })({});
}
