// import os from "node:os";

// console.log("CPUS:", os.cpus().length);
// console.log("Total Memory:", os.totalmem() / (1024 * 1024 * 1024)); //GB
// console.log("Free Memory:", os.freemem() / (1024 * 1024 * 1024)); //GB
// console.log("Up Time:", os.uptime() / (60 * 60));
// console.log("Hostname:", os.hostname());
// console.log("Userinfo:", os.userInfo());
// console.log("SystemArch:", os.machine());

//===================

//Common JS
// const getGreetings = require("./greeter");

//ESM
// import { getGreetings } from "./greeter.js";

/* 
console.log(process.argv);
* process provides arguments in argv array
* arguments:- node app.js, node app.js Asif, node app.js server
*                  [====]       [==========]      [============]

*/

/*
 * Create a greetings app, greet to the user according to the time (morning, noon, afternoon, evening)
 */

// const name = process.argv[2];
// const hours = new Date().getHours(); //it's in 24 hour format
// console.log("Hours:", hours);
// const greetings = getGreetings(hours);
// console.log(`${greetings}, ${name}!`);
