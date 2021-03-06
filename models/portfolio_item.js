var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Portfolio_ItemSchema = new Schema({
  image: String,
  title: String,
  description: String,
  language: String,
  framework: String,
  library: String,
  database: String,
  other: String,
  sitelink: String,
  sitename: String,
  githublink: String
});

var Portfolio_Item = mongoose.model('Portfolio_Item', Portfolio_ItemSchema);

module.exports = Portfolio_Item;