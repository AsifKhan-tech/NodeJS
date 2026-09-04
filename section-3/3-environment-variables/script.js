// import { exec } from "node:child_process";

// process.env.TEST = "Node.js set from code";

// console.log(process.env.TEST);
// process.env.TEST = "Node.js set from code";

// exec("echo $TEST", (error, stdout) => {
//   console.log(stdout); // Node.js set from code
// });

// // export TEST="Node.js set from terminal"

// exec(`test="Node.js set from code"`);

const environmentVariable = process.env.PATH;
console.log("Environment Variable: ", environmentVariable);

/**
 * Environment variables :- It's a pair of key and value pairs of strings that are used to configure the behavior of applications and services. They are typically set outside of the application code and can be accessed by the application at runtime. Environment variables can be used to store sensitive information, such as API keys or database credentials, as well as configuration settings that may vary between different environments (e.g., development, testing, production).
 *
 * To create an environment variable, we can use (export variableName=value) in terminals or command prompt. Jab bhi uska (process ka) child process run hoga, usko ye environment variable pass kar diya jayega by operating system.
 */
