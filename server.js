//EXTERNAL MODULES//
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require("mongoose");

//CONFIG//
var config = require("./config.js");


//EXPRESS//
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));


//ROUTES//
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + "/public" });
});

require('./routes')(app, passport);

//CONNECTIONS//
var port = 8099;

app.listen(port, function() {
    console.log("Jake the Snake", port);
});

module.exports = app;
