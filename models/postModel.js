const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: String,
  media: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
