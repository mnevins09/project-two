var db = require("../models");
var datesData = require("../data/datesData");
var appointmentsData = require("../data/appointmentsData");

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


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/dates", function (req, res) {
    res.json(datesData);
  });

  app.get("/api/appointments", function (req, res) {
    res.json(appointmentsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/dates", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (datesData.length < 5) {
      datesData.push(req.body);
      res.json(true);
    }
    else {
      appointmentsData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function () {
    // Empty out the arrays of data
    datesData = [];
    appointmentsData = [];

    console.log(datesData);
  });
};