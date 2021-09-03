const mongoose = require("mongoose");

const RentalSchema = mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  bookId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Rentals", RentalSchema);
