var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/home_page');

var Portfolio_Item = require('./portfolio_item');

module.exports.Portfolio_Item = Portfolio_Item;
