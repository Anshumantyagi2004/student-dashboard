import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./src/config/db.js";
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

app.get("/check-db", async (req, res) => {
  try {
    // direct connection string (hard-coded for debugging)
    await mongoose.connect(
      "mongodb+srv://anshutyagi799_db_user:eY7f8zXcAvYEx3UK@cluster0.hn5ewin.mongodb.net/studentForm",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 8000
      }
    );

    const state = mongoose.connection.readyState; // 0,1,2,3
    const states = {0: "disconnected", 1: "connected", 2: "connecting", 3: "disconnecting"};

    if (state === 1) {
      return res.json({ connected: true, message: "MongoDB is connected ✔️" });
    } else {
      return res.json({ connected: false, message: `MongoDB ${states[state] || state}`, state });
    }
  } catch (err) {
    return res.status(500).json({ connected: false, message: "Connection failed ❌", error: err.message });
  }
});

app.use("/api", studentRoutes);
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });


