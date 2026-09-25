#!/usr/bin/env node

/**
 * This shebang directive is now a portable shebang because it uses the env utility. It dynamically searches the user's $PATH to find where the interpreter is installed / located.
 */

console.log("File with shebang");
/**
 * When I'm running this file doing ./app.js, it is running bash app.js until I didn't add shebang. After adding shebang, it is running node app.js. So, shebang is used to tell the OS which interpreter to use to run the script.
 */
