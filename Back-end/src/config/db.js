// src/config/db.js
import mongoose from "mongoose";

const URI = process.env.URI || process.env.MONGO_URI || process.env.MONGO_URL
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected!"); 
    await Student.createCollection();
    return "Connected";  } 
  catch (err) {
    console.error("MongoDB Error:", err.message);
    return "Not Connected"; } 
};
export default connectDB
