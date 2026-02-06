module.exports = function (app) {
  app.get("/", function (req, res) {
    // var html =
    //   "<!DOCTYPE html>" +
    //   "<html>" +
    //   "<head>" +
    //   "<meta charset='utf-8'/>" +
    //   "</head>" +
    //   "<body>" +
    //   "<h1>root</h1>" +
    //   "</body>" +
    //   "</html>";
    // res.send(html);

    res.render("15-index.html");
  });

  app.get("/test", function (req, res) {
    res.render("15-test.html");
  });
};
