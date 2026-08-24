#!/usr/bin/env node
//shebang

import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

import {
  createFolder,
  createFile,
  writeToFile,
  deleteFile,
  deleteFolder,
  listItems,
} from "./fs.js";

import chalk from "chalk";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

async function menu() {
  console.clear();
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
      case "4":
        const deleteFilePath = await rl.question(
          chalk.cyan("File to delete: "),
        );
        await deleteFile(deleteFilePath);

        console.log(chalk.green(`✅️ File deleted!`));
        break;

      case "5":
        const deleteFolderPath = await rl.question(
          chalk.cyan("Folder to delete: "),
        );
        await deleteFolder(deleteFolderPath);

        console.log(chalk.green(`✅️ Folder deleted!`));
        break;

      case "6":
        const listFolderPath = await rl.question(
          chalk.cyan("Folder path (Enter for current) "),
        );
        const items = await listItems(listFolderPath || "./");

        console.log(chalk.bold.greenBright(`\n Contents:`));

        items.forEach((item) => {
          const icon = item.type === "Folder" ? "📂" : "📄";
          console.log(`${icon} ${chalk.yellow(item.name)}`);
        });
        break;

      case "7":
        rl.close();
        return;
    }

    await rl.question(chalk.gray("\n Press Enter to continue..."));
    menu();
  } catch (error) {
    console.log("Error:", error);
  }
}

menu();
