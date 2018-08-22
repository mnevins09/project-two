
var express = require("express");
var bodyParser = require("body-parser");
// ******************************************************************************
var app = express();
var passport = require('passport')
var session = require('express-session')
var env = require('dotenv').config();
var exphbs = require('express-handlebars')

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

//Models
var db = require("./models");

// Routes
// =============================================================

require("./routes/html-routes.js")(app);
require('./routes/auth.js')(app, passport);
require("./routes/api-routes.js")(app);

// console.log('this is our models!!!!!', models);
//load passport strategies
require('./config/passport/passport.js')(passport, db.user);


//Sync Database
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
  });
})


