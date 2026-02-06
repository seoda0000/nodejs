/**
 * 웹 애플리케이션을 개발할 수 있도록 제공
 * 일반적인 웹서버와 동일하게 동작
 * 웹 서버의 기능을 할 수 있는 모듈
 */

var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);

  res.writeHead(200, { "content-type": "text/html" });

  res.write("<!DOCTYPE html>"); // 응답 결과
  res.write("<html>");
  res.write("<head>");
  res.write("<meta charset='utf-8'/>");
  res.write("</head>");
  res.write("<body>");

  switch (q.pathname) {
    case "/":
      res.write("<h1>root</h1>");
      res.write("<a href='test1?data1=111'>test1</a><br/>");
      res.write("<a href='test2?data2=222'>test2</a><br/>");
      break;
    case "/test1":
      res.write("<h1>test1</h1>");
      res.write("<h1>data1: " + q.query.data1 + "</h1><br/>");
      break;
    case "/test2":
      res.write("<h1>test2</h1>");
      res.write("<h1>data2: " + q.query.data2 + "</h1><br/>");
      break;
  }
  console.log(req.url);

  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(1234); // port 번호와 서버 가동 (localhost:1234)
console.log("서버 가동");
