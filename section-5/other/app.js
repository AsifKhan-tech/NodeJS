import { num } from "./math.js";
console.log(import.meta);

/**
 * How to access filename and dirname in ESM
 * In Node.js, import.meta is a built-in object that provides context-specific metadata about the current ECMAScript module (ESM).
 * It's avialable in Browser and NodeJS
 * context-specific means the information inside the object changes depending on exactly which file is reading it.
 */

//It has several properties:- it provides url property ans resolve method in the browser
//url: which url load the module. It's HTTPS path in browser and FTP(file) path in NodeJS
//resolve: we can load more modules by loading the path of another modules.
//We can use our property on import.meta
/**
 * import.meta.name = "Ayan";
 */
