/**
 * 라우팅 기능을 이용하면 수많은 요청들을 여러 파일로 분리하여 관리 가능
 */

var express = require("express");
var app = express();
var controller1 = require("./router/14-controller1")(app);
var controller2 = require("./router/14-controller2")(app);

var server = app.listen(2000, function () {
  console.log("서버 가동");
});
