import * as fs from "node:fs";

function createFile(pathname) {
  //Sync API
  fs.writeFileSync(pathname, "Create file synchronously!\n");
  // fs.writeFileSync(pathname, "Hello JavaScript!"); replace file &  create new file with new content
  fs.appendFileSync(pathname, "Hello Node.js");
  console.log("File has been created!");
}

createFile("./hello.txt");
