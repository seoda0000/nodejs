var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
  app.get("/", function (req, res) {

    res.render("17-index.ejs");
  });

  app.get("/parameter", function (req, res) {

    var render_data = {
      data1: req.query.data1,
      data2: req.query.data2
    };
    res.render("17-parameter.ejs", render_data);
  });

  app.post("/parameter", urlencodedParser, function(req, res){
    var render_data = {
      data1: req.body.data1,
      data2: req.body.data2
    };
    res.render("17-parameter.ejs", render_data);
  });

  app.get("/save_cookie", function (req, res) {

    var op = {
      maxAge: 365*24*60*60
    };

    // 쿠키 저장
    res.cookie("cookie1", "aaaaa", op);
    res.render("17-saveCookie.ejs");
  });

  app.get("/load_cookie", function (req, res) {
    var render_data = {
      cookie1: req.cookies.cookie1
    };

    res.render("17-loadCookie.ejs", render_data);
  });

  app.get("/save_session", function (req, res) {
    req.session.data1 = 100;
    req.session.data2 = "안녕하세요";
    
    res.render("17-saveSession.ejs");
  });

  app.get("/load_session", function (req, res) {
    var render_data = {
      data1: req.session.data1,
      data2: req.session.data2
    };

    res.render("17-loadSession.ejs", render_data);
  });

};
