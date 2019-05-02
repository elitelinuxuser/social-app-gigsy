const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  status: {
    type: String
  },
  bio: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
