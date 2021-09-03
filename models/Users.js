const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  lastName: String,
});

module.exports = mongoose.model("Users", UserSchema);
