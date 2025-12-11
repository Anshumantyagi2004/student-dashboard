import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
import studentRoutes from "./src/routes/studentRoute.js";
import mongoose from "mongoose";
dotenv.config();
const app = express();

app.use(cors({
  origin: [
    "https://student-dashboard-wq1c.vercel.app"
  ],
  methods: ["GET", "POST"]
}));
app.get("/", (req, res) => {
  res.json({
    msg: "Backend is running",
  
  });
});
app.use(express.json());
connectDB();   

app.get("/check-db", (req, res) => {
  const state = mongoose.connection.readyState;
  if (state === 1) {
    return res.json({ connected: true, message: "MongoDB is connected ✔️" });
  } else {
    return res.json({ connected: false, message: "MongoDB is NOT connected ❌", state });
  }
});


app.use("/api", studentRoutes);
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });


