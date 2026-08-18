/* 
console.log(process.argv);
* process provides arguments in argv array
* arguments:- node app.js, node app.js Asif, node app.js server
*                  [====]       [==========]      [============]

*/

/*
 * Create a greetings app, greet to the user according to the time (morning, noon, afternoon, evening)
 */

const name = process.argv[2];

const hours = new Date().getHours(); //it's in 24 hour format
console.log("Hours:", hours);

function getGreeting(hours) {
  if (hours < 4 || hours > 19) return "Good night";
  if (hours < 9) return "Good morning";
  if (hours < 16) return "Good afternoon";
  return "Good evening";
}
const greetings = getGreeting(hours);
console.log(`${greetings}, ${name}!`);
