var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Portfolio_ItemSchema = new Schema({
  description: String,
  language: String,
  framework: String,
  library: String,
  database: String,
  other: String,
  sitelink: String,
  githublink: String
});

var Portfolio_Item = mongoose.model('Portfolio_Item', Portfolio_ItemSchema);

module.exports = Portfolio_Item;