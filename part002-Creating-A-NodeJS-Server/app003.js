const http = require("http");
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html"); // Corrected Content-Type

  response.write("<h1>Hello World!</h1>");

  if (request.url === "/") {
    response.end("Hello World!");
  } else if (request.url === "/about") {
    response.end("About Page");
  } else if (request.url === "/contact") {
    response.end("Contact Page");
  } else if (request.url === "/help") {
    response.end("Help Page");
  } else if (request.url === "/error") {
    response.end("Error Page");
  } else {
    response.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
