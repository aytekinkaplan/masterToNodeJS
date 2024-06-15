const http = require("http");
const hostname = "localhost"; // Consistent naming convention
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  // Use backticks for multiline HTML string
  const myHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
  </html>
  `;

  // Send the HTML content
  res.end(myHTML);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
