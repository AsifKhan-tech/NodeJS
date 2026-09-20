const num = require("./math.js");
console.log(__dirname);
console.log(__filename);

/**
 * Becaue of module wrapper function, we get __dirname, __filename, require function, modules object access. How?
 * NodeJS runs whatever code we written by putting the code into a function

 * When you write code in a .js file in Node.js, you might think this is what runs:
 */
const value = 5;
console.log(value);

/**
 * But actually, Node.js wraps your code inside a function before running it. That function is called the Module Wrapper Function.
 *The code is running is the function's code
 * That's why variable are created in the .js file are local
 */

const name = "Ayan";
console.log(name);

console.log(arguments); // wait, this won't work directly...

console.log(__filename);
console.log(__dirname);
console.log(typeof require);
console.log(typeof module);
console.log(typeof exports);
/**
 * All of these exist even though you never declared them. That's the wrapper function at work.
 */

// const wrapper = require("module").wrapper;
// console.log(wrapper);
// Output: [ '(function (exports, require, module, __filename, __dirname) { ',
//           '\n});' ]
