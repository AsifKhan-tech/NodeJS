#!/usr/bin/env node

/**
 * npx searches a file and executes it
 *
 * npx <package_name>
 * NPX Searching steps:
 * Firstly search package.json file in current working directory and see that what is the value of "name" key, if name key is find, after it searches for "bin" key it means that which file has to execute
 */

console.log("NPX working...");
