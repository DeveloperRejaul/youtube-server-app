import mongoose from "mongoose";
const VideoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  thumbLine: { type: String, require: true },
  video: { type: String, require: true },
  avatar: { type: String, require: true },
  author: { type: String, require: true },
  duration: { type: String, require: true },
  views: { type: Number, default: 0 },
});

const Video = mongoose.model("video", VideoSchema);
export { Video };
