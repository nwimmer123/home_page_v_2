var express = require('express');
var app = express();
var mongoose = require('mongoose');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var html = require('html');

var configDB = require('./config/database.js');

app.use('/',express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//server requesting data from database/;
// app.get('/api/portfolio_items', function portfolio_itemsIndex(req, res) {
//   db.Portfolio_Item.find({}, function(err, books) {
//     res.json(portfolio_items);
//   });
// });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});