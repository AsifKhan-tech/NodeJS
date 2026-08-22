// import * as fs from "node:fs";
import * as fs from "node:fs/promises";

async function deleteFolder(folderpath) {
  try {
    await fs.rm(folderpath, { recursive: true });
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function createFolder(folderName) {
  await fs.mkdir(folderName, { recursive: true });

  console.log("Folders created recursively");
}

async function deleteFile(filepath) {
  await fs.unlink(filepath);
}

async function readFile(filepath) {
  const data = await fs.readFile(filepath, "utf-8");
  console.log("Data", data);
}

async function writeToFile(pathname, content = "") {
  await fs.appendFile(pathname, content);
}

async function createFile(pathname, content = "") {
  await fs.writeFile(pathname, content);
}
deleteFolder("./contents");
// deleteFile("./hello.txt");
// readFile("./hello.txt");
// createFolder("./contents/assets/images");

// function createFile(pathname) {
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

// async function createFile(pathname) {
//   try {
//     await fs.writeFile(pathname, "Hello NodeJS\n");
//     await fs.appendFile(pathname, "Hello JavaScript!\n");
//   } catch (error) {
//     console.log("Error: ", error);
//   }

//   console.log("File has been created using promises API");
// }

// createFile("./node.txt");
