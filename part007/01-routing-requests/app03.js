const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  // Form işleme kodu buraya gelir
  res.redirect(303, "/thank-you");
});

app.get("/thank-you", (req, res) => {
  res.send("Thank you for your submission!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
