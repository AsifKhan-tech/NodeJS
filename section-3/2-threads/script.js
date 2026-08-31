import { Worker } from "node:worker_threads";

console.time(); //start the timer

new Worker("./loop-1");
new Worker("./loop-2");
new Worker("./loop-3");

console.timeEnd(); //end timer, give the time how much code took time
