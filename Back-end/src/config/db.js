// src/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // 🔥 Direct MongoDB connection string (NO .env)
    await mongoose.connect(
      "mongodb+srv://anshutyagi799_db_user:eY7f8zXcAvYEx3UK@cluster0.hn5ewin.mongodb.net/studentForm",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000 // helps avoid 'connecting' forever
      }
    );

    console.log("MongoDB Connected ✔️");
    return "Connected";
  } catch (err) {
    console.error("MongoDB Error ❌:", err.message);
    return "Not Connected";
  }
};

export default connectDB;
