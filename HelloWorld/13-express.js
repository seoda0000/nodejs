/**
 * express 모듈은 웹 애플리케이션을 개발할 때 가장 많이 사용되고 있는 외부 모듈
 * jade, ejs 등 동적 웹 페이지 파일을 지원
 */

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("ROOT");
});

app.get("/test", function(req, res){
    res.send("test");
});

var server = app.listen(2000, function(){ // 2000번 포트로 가동 후 함수 호출
    console.log("서버 가동");
});
