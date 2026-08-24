import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

import { createFolder, createFile, writeToFile } from "./fs.js";

import chalk from "chalk";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

async function menu() {
  console.log(chalk.blue.bold(`\n📂 File System Manager\n`));

  const options = [
    "Create Folder",
    "Create File",
    "Write to File",
    "Delete File",
    "Delete Folder",
    "List Items",
    "Exit",
  ];

  options.forEach((opt, i) =>
    console.log(chalk.green(`${i + 1}`) + chalk.white(` ${opt}`)),
  );

  try {
    const answer = await rl.question(chalk.cyan("\n Select option:"));

    switch (answer) {
      case "1":
        const folderPath = await rl.question(chalk.cyan("Folder path: "));
        await createFolder(folderPath);

        console.log(chalk.green(`✅️ Folder created!`));
        break;

      case "2":
        const filepath = await rl.question(chalk.cyan("File path: "));
        const initialContent = await rl.question(
          chalk.cyan("Initial content: "),
        );
        await createFile(filepath, `${initialContent}\n`);

        console.log(chalk.green(`✅️ File created!`));
        break;

      case "3":
        const appendFilepath = await rl.question(chalk.cyan("File path: "));
        const appendContent = await rl.question(chalk.cyan("Content: "));
        await writeToFile(appendFilepath, `\n ${appendContent}`);

        console.log(chalk.green(`✅️ Content added to file!`));
        break;

      default:
        break;
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

menu();
