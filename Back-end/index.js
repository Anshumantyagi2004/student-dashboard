import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
import studentRoutes from "./src/routes/studentRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

// CORS for frontend
app.use(cors({
  origin: [
    "https://student-dashboard-wq1c.vercel.app"
  ],
  methods: ["GET", "POST"]
}));



 await connectDB();   

  // 🟢 Now DB is connected — start server



// 🟢 Root API: Report DB status
app.get("/", (req, res) => {
  res.json({
    msg: "Backend is running",
  
  });
});

app.use("/api", studentRoutes);

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });


