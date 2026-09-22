/**
 * How to access __filename and __dirname in ESM
 * In Node.js, import.meta is a built-in object that provides context-specific metadata about the current ECMAScript module (ESM).
 * It's avialable in Browser and NodeJS
 * context-specific means the information inside the object changes depending on exactly which file is reading it.
 */

console.log(import.meta);
//It has several properties:- it provides url property ans resolve method in the browser
//url: this is the url where the module is load.
