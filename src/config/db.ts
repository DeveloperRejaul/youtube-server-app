import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL || "mongodb://127.0.0.1:27017/youtube"
    );
    console.log("data base connected");
  } catch (error: any) {
    console.log(error.message);
  }
};
