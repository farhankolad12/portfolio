const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  img: { type: String },
  shortInfo: { type: String },
  header: { type: String },
  tags: [String],
  createdAt: { type: Date },
  blog: { type: String },
});

module.exports = mongoose.model("Blogs", blogSchema);
