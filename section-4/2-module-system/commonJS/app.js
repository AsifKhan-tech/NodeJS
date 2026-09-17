const sum = require("./sum");
const product = require("./product");

console.log("Sum: ", sum(1, 2, 3, 4, 5));
console.log("Product: ", product(1, 2, 3, 4, 5));

/**
 * When the code is growing, and any particular piece ofcode performs a specific task, split that code into multiple files, that files can be said as modules on bird's eye view.
 */
