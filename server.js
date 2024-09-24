const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.use((req, res) => {
  res.redirect("/home");
});

app.listen(port);
console.log("MyWebsite server running on port " + port);
