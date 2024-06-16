const express = require("express");
const app = express();

app.get("/temporary", (req, res) => {
  res.redirect(302, "https://example.com/temporary");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
