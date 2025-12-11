import express from 'express';
import dotenv from 'dotenv';
import connectDB, { getReadyState } from "./src/config/db.js";
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
try {
    // Attempt to connect if not already connected
    if (getReadyState() !== 1) {
      await connectDB();
    }

    const state = getReadyState();
    const stateMap = { 0: "disconnected", 1: "connected", 2: "connecting", 3: "disconnecting" };

    return res.json({
      connected: state === 1,
      message: `MongoDB ${stateMap[state] || state}`,
      state
    });
  } catch (err) {
    return res.status(500).json({
      connected: false,
      message: "MongoDB connection failed ❌",
      error: err.message
    });
  }
});


app.use("/api", studentRoutes);
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });


