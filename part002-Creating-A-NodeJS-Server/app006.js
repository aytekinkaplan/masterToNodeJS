const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.readFile("index.html", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
