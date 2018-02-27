var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var mongoose = require("mongoose");
var compression = require('compression')
require("dotenv").config();


var db= require("./config/db.js");
mongoose.connect(db.url);
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(compression());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 
app.use("/scripts",express.static(__dirname + '/node_modules/'));
require('./app/routes')(app);
app.listen(port); 
exports = module.exports = app;  
