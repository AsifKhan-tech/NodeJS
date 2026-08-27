import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("NodeJS server");
});

console.log("Server: ", server);

server.listen(8000, () => {
  console.log("Server is listening...");
});
