import { createServer } from "node:http";
import fs from "node:fs";

const server = createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const dataStream = fs.createReadStream("./index.html");
    dataStream.pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h2>This is about page</h2>");
  } else if (req.url === "/expenses") {
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port:3000");
});
