//Common JS
// const timer = require("./timer.js");
//require function itself searches the file in the filesystem and reads it. JS Main thread will busy do it
//These load synchronously
//file extension (optional)
//if we give full path of the file then we can load any file using cjs

//ESM
import timer from "./timer.js";
//Now the work of loading, the JS main thread will not do it.
//These load Asynchronously: As JS engine reads the files asynchronously while if we execute the file, we will JS for it that is synchronously
//file extension mandatiry
//we can not load any file except only JS and mjs
