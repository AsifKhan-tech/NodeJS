//Common JS
// const timer = require("./timer.js");
//require function itself searches the file in the filesystem and reads it. JS Main thread will busy do it
//These load synchronously

//ESM
import timer from "./timer.js";
//Now the work of loading, the JS main thread will not do it.
//These load Asynchronously: As JS engine reads the files asynchronously while if we read the file, we will JS for it that is synchronously
//
