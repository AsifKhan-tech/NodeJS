import { createServer } from "node:http";
import fs from "node:fs";

const server = createServer(async (req, res) => {
  //Routing
  //   console.log("Request", res);

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    // const data = await fs.readFile("./index.html");

    const dataStream = fs.createReadStream("./index.html");

    dataStream.pipe(res);
    // dataStream.on("data", (chunk) => {
    //   res.write(chunk);
    // });

    // dataStream.on("end", () => {
    //   res.end();
    // });
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h2>This is about page</h2>");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port:3000");
});
