import mongoose from "mongoose";

export const connectDB = async () => {
const dbName = "ygmDB"
const DB_URI = `${process.env.MONGO_URI}/${dbName}`

  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🛜 MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
