const express = require("express");
const path = require("path");
const app = express();

app.get("/gadgets", (req, res) => {
  const filePath = path.join(__dirname, "gadgets.html");
  res.sendFile(filePath);
});

module.exports = app;
