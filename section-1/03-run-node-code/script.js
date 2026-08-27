import fs from "node:fs";

const text = fs.readFileSync("./text.txt");
console.log(text.toString());
console.log("End");

console.log(global);
