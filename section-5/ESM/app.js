//ES6 module
//named export

//for imorting "named" export, we use "{} curly braces"
// import { num } from "./math.js";
// console.log(num);

//for imorting "default" export, we don't use "{} curly braces"

import num, { newNum } from "./math.js";
console.log(num, newNum);

var name = "Ayan";
// number = 22;
/**
 * If there is use of both modules(commomn JS, ESM) in the project, we can have file extension for common JS is index.cjs and for ESM index.mjs
 */
//In ESM, NodeJS creates a module scope instead of local scope and the variables created and imported in the file primarly fall in the module scope

//By default, there is "use strict" enabled in the script
//putting .js extension is mandatory in the imported file
