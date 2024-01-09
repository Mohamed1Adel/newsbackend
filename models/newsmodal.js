const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  imageURl: String,
  newsContent: String,
  slide:String,
  date:String,
  writer:String

});

const news = mongoose.model("news", newsSchema);

module.exports = news;
