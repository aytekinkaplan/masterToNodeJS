const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello, World!");
fs.writeFileSync("hello.txt", "Hello, Universe!");
fs.writeFileSync(
  "hello.html",
  "<!DOCTYPE html><html><body><h1>Hello, World!</h1></body></html>"
);

// $ node first-app.js
// Hello, World!
// Hello, Universe!
// <!DOCTYPE html><html><body><h1>Hello, World!</h1></body></html>

fs.writeFileSync("hello.html", "<h1>Hello, Universe!</h1>");

// $ node first-app.js
fs.writeFileSync("hello.docx", "Hello, Universe!");

const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);
