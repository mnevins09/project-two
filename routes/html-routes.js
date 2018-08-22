var path = require('path');

module.exports = function (app) {

  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));;
  })

  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));;
  })
}
