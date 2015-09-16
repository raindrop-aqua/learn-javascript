var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var rewrite = require("express-rewrite");

var app = express();

app.use(
    /\/[A-Z][a-z]+([A-Z][a-z]+)+/,
    express.static("client/index.html")
);
app.use(bodyParser.json());

console.log("start listening at 8000");
app.listen(8000);



