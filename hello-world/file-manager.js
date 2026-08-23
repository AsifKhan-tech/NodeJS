import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

import { createFolder, createFile } from "./fs.js";

import chalk from "chalk";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

async function menu() {
  console.log(chalk.magentaBright.bold(`\n File System Manager\n`));

  const options = [
    "Create Folder",
    "Delete Folder",
    "Create File",
    "Write to File",
    "Delete File",
    "List Items",
    "Exit",
  ];

  options.forEach((opt, i) =>
    console.log(chalk.yellow(`${i + 1}`) + chalk.white(`: ${opt}`)),
  );

  try {
    const answer = await rl.question(chalk.cyan("\n Select option:"));

    switch (answer) {
      case "1":
        const folderPath = await rl.question(chalk.cyan("Folder path: "));
        await createFolder(folderPath);

        console.log(chalk.greenBright(`Folder created!`));
        break;

      case "2":
        const filepath = await rl.question(chalk.cyan("File path: "));
        const initialContent = await rl.question(
          chalk.cyan("Initial content: "),
        );
        await createFile(filepath, initialContent);

        console.log(chalk.greenBright(`File created!`));
        break;

      default:
        break;
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

menu();
