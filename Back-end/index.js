// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import mainRoute from './src/routes/mainRoute.js'; // ✅ correct import
import cors from 'cors';
import studentRoutes from "./src/routes/studentRoute.js";
dotenv.config();

// ✅ Allow CORS
const app = express();
app.use(cors({
  origin: 'https://student-dashboard-wq1c.vercel.app/',
  credentials: true,
}));
const PORT = 5000;

app.use(express.json()); // ✅ parse JSON request bodies

app.get('/', (req, res) => {
  res.send("Backend is running");
});

app.use("/api", studentRoutes);


// Connect to DB
connectDB();

// Mount routes
app.use('/api', mainRoute); // ✅ mounts /api/auth/...

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
