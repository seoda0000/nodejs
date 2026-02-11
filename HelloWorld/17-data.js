var express = require("express");
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(cookieParser());
app.use(session({
    secret: "abcdefg", // 암호화
    resave: false, // 재조정 여부
    saveUninitialized: true // 초기화 값을 저장하지 않는다
}));

var router = require("./router/17-controller")(app);

var server = app.listen(2000, function () {
  console.log("서버 가동");
});
