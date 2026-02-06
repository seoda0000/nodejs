module.exports = function (app) {
  app.get("/", function (req, res) {
    var date = new Date();

    var render_data = {
      str: "문자열",
      number: 100,
      date: date,
    };

    res.render("16-index.ejs", render_data);
  });

  app.get("/test", function (req, res) {
    res.render("16-test.ejs");
  });
};
