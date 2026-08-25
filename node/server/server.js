import { createServer } from "node:http";
import fs from "node:fs";
// import fsPromise from "node:fs/promises";

let count = 0;

// Server sent events(SEE)
const server = createServer(async (req, res) => {
  if (req.url === "/") {
    const htmlPage = fs.createReadStream("./stream.html");
    htmlPage.pipe(res);
  } else if (req.url === "/stream") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    const interval = setInterval(() => {
      res.write(`data: The count is ➜ ${count++}\n\n`);
    }, 1000);

    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  }

  // if (req.url === "/") {
  //   res.writeHead(200, { "content-type": "text/html" });
  //   const dataStream = fs.createReadStream("./index.html");
  //   dataStream.pipe(res);
  // } else if (req.url === "/about") {
  //   res.writeHead(200, { "content-type": "text/html" });
  //   const dataStream = fs.createReadStream("./about.html");
  //   dataStream.pipe(res);
  // } else if (req.url === "/expenses") {
  //   //APIs
  //   //create an expense
  //   //POST method
  //   if (req.method === "POST") {
  //     //read data from request
  //     let buffer = "";
  //     req.on("data", (chunk) => {
  //       console.log("Data: ", chunk);
  //       buffer += chunk.toString();
  //     });
  //     req.on("end", async () => {
  //       const data = await fsPromise.readFile("./db.json");
  //       const dbData = JSON.parse(data);
  //       dbData.push(JSON.parse(buffer));
  //       fsPromise.writeFile("./db.json", JSON.stringify(dbData, null, 2));
  //       res.end("ok");
  //     });
  //     //store it in json file(DB)
  //   } else if (req.method === "GET") {
  //     //read data from json file(DB)
  //     const data = await fsPromise.readFile("./db.json");
  //     //return data to the client
  //     res.end(data);
  //   }
  // }
});

server.listen(3000, () => {
  console.log("Server is listening on port:3000");
});
