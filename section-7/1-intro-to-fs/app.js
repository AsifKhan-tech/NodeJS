import * as fs from "node:fs";

// const HTMLcontent = fs.readFileSync("./index.html");
// console.log(HTMLcontent);

/**
 * fs module can reads and write any file Synchronously & Asynchronously. It works on binaries
 *
 * *****POSIX*******
 * POSIX stands for Portable Operating System Interface.
 * POSIX functions are standardized system calls and library functions defined by the IEEE Computer Society to ensure software compatibility across different operating systems.
 *
 * **********file descriptor********
 * A file descriptor (FD) is a simple, non-negative integer that an operating system uses to identify and keep track of an open file or input/output (I/O) resource.
 *
 * *********readFileSync************
 * Synchronously reads the entire contents of a file.
 * path: A path to a file. If a URL is provided, it must use the `file:` protocol.(file:///Users/Name/Documents/index.html)
 * If a file descriptor is provided, the underlying(related) file will _not_ be closed automatically.
 * return the content of the given file in Buffer, if encoding option is defined, then this function returns string
 */

fs.readFile("./index.html", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

/**
 * *********readFile************
 * Asynchronously reads the entire contents of a file.
 * A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 *
 */
