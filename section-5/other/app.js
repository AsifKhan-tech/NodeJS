/**
 * How to access __filename and __dirname in ESM
 * In Node.js, import.meta is a built-in object that provides context-specific metadata about the current ECMAScript module (ESM).
 * context-specific means the information inside the object changes depending on exactly which file is reading it.
 */

console.log(import.meta);
