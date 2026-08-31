import { Worker } from "node:worker_threads";

// console.time(); //start the timer

new Worker("./loop-1.js");
new Worker("./loop-2.js");
new Worker("./loop-3.js");

// console.timeEnd(); //end timer, give the time how much code took time
