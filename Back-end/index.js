import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
import studentRoutes from "./src/routes/studentRoute.js";

dotenv.config();
const app = express();
app.use(express.json());

// CORS for both local + vercel
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://student-dashboard-wq1c.vercel.app"
  ],
  methods: ["GET", "POST"]
}));

// 🟢 Connect DB on startup and store result
let dbStatus = "Checking…";

(async () => {
  dbStatus = await connectDB(); // 🟢 HERE FIXED
})();

// 🟢 Root API: Send DB Status to frontend
app.get("/", (req, res) => {
  res.json({
    msg: "Backend is running",
    db: dbStatus,
  });
});

app.use("/api", studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
