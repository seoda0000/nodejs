var express = require("express");
var ejs = require("ejs");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.use(express.static("public"));

var controller = require("./router/16-controller")(app);

var server = app.listen(2000, function () {
    console.log("서버 가동");
  });
  
