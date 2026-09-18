// const { square, cube, power } = require("./modules");

const math = require("./modules");
console.log("app.js: ", math);
/**
 * const { square, cube, power } = {
  square,
  cube,
  power,
};
 */
// console.log(square(5));
// console.log(cube(5));
// console.log(power(5, 2));
/*
const sum = require("./math/sum");
const product = require("./math/product");

console.log("Sum: ", sum(1, 2, 3, 4, 5));
console.log("Product: ", product(1, 2, 3, 4, 5));
*/

/**
 * When the code is growing, and any particular piece ofcode performs a specific task, split that code into multiple files, that files can be said as modules on bird's eye view.
 */

/**
 *require is a function that takes an argument (a string that would be the path of the file(module)).
 * It searches for the file according to the provided path, and if it finds the file, it executes the code in that file and returns the value of module.exports object.
 * If doesn't find the file by giving path, it throws an error.
 */
// console.log(typeof require);
