const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.use((req, res) => {
  res.redirect("/home");
});

app.listen(port, () => { console.log("MyWebsite server running on port " + port) });
