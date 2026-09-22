//if the project is both module systems (common JS & ESM), it's convention

//we can use cjs file extension in common JS
//Common JS
// const timer = require("./timer.js");
//require function itself searches the file in the filesystem and reads it. JS Main thread will busy do it
//These load synchronously
//file extension (optional)
//if we give full path of the file then we can load any file using cjs
// this keyword in common js points to module.exports' value by default

//ESM
import timer from "./timer.js";
//Now the work of loading, the JS main thread will not do it.
//These load Asynchronously: As JS engine reads the files asynchronously while if we execute the file, we will JS for it that is synchronously
//file extension mandatiry
//we can not load any file except only JS and mjs
//we can use mjs file extension in module JS
//if we want to use ESM in our project, we will have to set type : "module" in package.json file
// this keyword in module js is undefined
