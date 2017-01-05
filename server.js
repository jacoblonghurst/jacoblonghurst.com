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



//CONNECTIONS//
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set("debug", true);
mongoose.connect(mongoURI);
mongoose.connection.once("open", function(){
  console.log("Connected to Mongo DB at ", mongoURI);
  app.listen(port, function(){
    console.log("T-rex", port);
  });
});
