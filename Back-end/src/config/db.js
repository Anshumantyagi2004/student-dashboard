import mongoose from "mongoose";
import Student from"../models/student.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("MongoDB Connected!");

    await Student.createCollection();
    console.log("Done");
    return "OK"

  } catch (err) {
    console.error("MongoDB Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
