//native module
import fs from "node:fs";
import net from "node:net";
import dgram from "node:dgram";
import http from "node:http";
import https from "node:https";

//ESM
import { num } from "maths";
//commonjs
const { num } = require("maths");

//user module
// import { num } from "math";
console.log(num);

//third-party modules
import dotenv from "dotenv";
dotenv();
