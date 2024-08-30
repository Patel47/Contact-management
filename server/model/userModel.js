const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide user name"],
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    unique: [true, "Email already taken"],
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
  },
  is_varified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", userSchema);
