const express = require("express");
const app = express();

// Bu örnekte HTTP sunucusunu temsil eden basit bir yönlendirme
app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    res.redirect(`https://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the secure site!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
