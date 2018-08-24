var db = require("../models");


module.exports = function (app) {
  app.get("/api/user", function (req, res) {
    db.User.findAll({})
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  app.get("/api/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  app.post("/api/user", function (req, res) {
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      last_login: req.body.last_login
    })
  })

}