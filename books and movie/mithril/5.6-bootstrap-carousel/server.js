
var express = require("express");
var app = express();

app.use(express.static("client"));
app.use(express.static("bower_components"));

console.log("start listening at 8000");
app.listen(8000);
