import fs from "node:fs";

const text = fs.readFileSync("./text.txt");
console.log(text);
