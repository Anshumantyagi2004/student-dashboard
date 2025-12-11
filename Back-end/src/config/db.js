// src/config/db.js



import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("MongoDB Connected!");
        await Student.createCollection(); 
        return "Connected";
       
    } catch (err) { console.error("MongoDB Error:", err.message); return "Not Connected"; }
};
export default connectDB



