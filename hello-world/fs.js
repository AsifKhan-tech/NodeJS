// import * as fs from "node:fs";
import * as fs from "node:fs/promises";

async function deleteFolder(folderpath) {
  try {
    await fs.rm(folderpath, { recursive: true });
  } catch (error) {
    console.log("Error: ", error);
  }
}

export async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName, { recursive: true });
  } catch (error) {
    console.log("Error", error);
  }
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

export async function createFile(pathname, content = "") {
  await fs.writeFile(pathname, content);
}

async function getFileInfo(filepath) {
  const stats = await fs.stat(filepath);

  return {
    size: `${(stats.size / 1025).toFixed(2)} KB`,
    created: stats.birthtime.toLocaleString(),
    modified: stats.mtime.toLocaleString(),
  };
}

// createFolder("./contents/assets/images");
// deleteFolder("./contents");
// createFile("./hola.txt", "Hello NodeJS!\n");
// deleteFile("./hello.txt");
// readFile("./hello.txt");
// getFileInfo("./hola.txt").then((data) => console.log(data));

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
