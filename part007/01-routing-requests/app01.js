const express = require("express");

const app = express();
const port = 3000;
const host = "localhost";

app.get("/old-route", (req, res) => {
  res.redirect(301, "/new-route");
});
app.get("/new-route", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
