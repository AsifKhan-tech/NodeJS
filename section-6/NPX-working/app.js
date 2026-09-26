#!/usr/bin/env node

/**
 * npx searches a file and executes it
 *
 * npx <package_name>
 * NPX Searching steps:
 * Firstly search package.json file in current working directory and see that what is the value of "name" key, if name key is find, after it searches for "bin" key it means that which file has to execute. It executes file directly without using node. npx <file_name> as defined in package.json
 *
 * Second step it searches .bin folder inside it hello named file that all inside in node_modules folder in current working directory and execute it
 *
 * Third step it searches the given package is globally installed in the system :<npx hello>
 *
 * Where Globally installed packages found: pnpm root -g gives it: /home/asifkhan/snap/code/241/.local/share/pnpm/global/v11
 * npm root -g: /home/asifkhan/.nvm/versions/node/v24.15.0/lib/node_modules
 */

console.log("NPX working...");
