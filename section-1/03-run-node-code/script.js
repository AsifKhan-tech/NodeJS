import fs from "node:fs";

fs.writeFileSync("./text.txt", "\n It's JS runtime environment");
// const text = fs.readFileSync("./text.txt");
// console.log(text.toString());
console.log("End");

console.log(global);
