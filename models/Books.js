const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: String,
  author: String,
  num_of_pages: Number,
  genre: String,
});

module.exports = mongoose.model("Books", BookSchema);
