import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  tags: [String],
});

const Tag = mongoose.model("tag", TagSchema);
module.exports = { Tag };
