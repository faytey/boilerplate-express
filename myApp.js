var express = require('express');
var app = express();
console.log("Hello World");
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});



































 module.exports = app;
