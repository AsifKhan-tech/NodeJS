// Access process properties

//Command line arguments
process.argv;

//Environment variables
process.env;

//Current process ID
process.pid;

//parent process ID
process.ppid;

//Operating system platform
process.platform;

//NodeJS and dependencies version
process.version;

//processor architecture
process.arch;

// process methods

//current working directory
process.cwd();

//change directory
process.chdir("./src");

//Memory usage
process.memoryUsage();

//process uptime
process.uptime();

//exiting process : (0) indicates that there is no error in the running proces
process.exit(0);

//kill process
process.kill(process.pid);

//Emit warning
process.emitWarning("Custom warning message", {
  code: "Warning code",
  detail: "Additional warning message",
});

//interacting with stdin, stdout and stderr streams
process.stdout.write("Hello stdout\n");
process.stderr.write("Hello stderr\n");

//Next tick demonstration
process.nextTick(() => {
  //This will run on the next tick of the event loop
});

//Register event listeners

process.on("exit", (code) => {
  //process is about to exit with code
});

process.on("warning", (warning) => {
  //handle warning event
});

process.stdin.on("data", (data) => {
  //process the input data from stdin
});
