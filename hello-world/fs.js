// import * as fs from "node:fs";
import * as fs from "node:fs/promises";

// function createFile(pathname) {
//promises
//Sync API
/** 
  fs.writeFileSync(pathname, "Create file synchronously!\n");
  // fs.writeFileSync(pathname, "Hello JavaScript!"); replace file &  create new file with new content
  fs.appendFileSync(pathname, "Hello Node.js");
  console.log("File has been created!");
*/
//Async API
//Error first callbacks - When we use callback in Nodejs, the first parameter in the callback is error
// fs.writeFile(pathname, "Create file Asynchronously!\n", (err) => {
//   if (err) {
//     console.log("Something went wrong while creating file!");
//     return;
//   } else {
//     fs.appendFile(pathname, "Hello JavaScript!\n", (err) => {
//       if (err) {
//         console.log("Something went wrong while creating file!");
//         return;
//       } else {
//         console.log("File has been updated Asynchronously!");
//       }
//     });
//     console.log("File has been created Asynchronously!");
//   }
// });
// console.log("File operation done!");
// }

// createFile("./async.txt");
