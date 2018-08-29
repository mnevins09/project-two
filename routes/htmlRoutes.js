// *********************************************************************************
// htmlRoutes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/reviews", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reviews.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));;
  })

  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));;
  })
  app.get("/dates", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dates.html"));
  });

  app.get("/appointments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/appointments.html"));
  });
}

  



