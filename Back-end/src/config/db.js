// src/config/db.js
import mongoose from "mongoose";

const URI = process.env.URI || process.env.MONGO_URI || process.env.MONGO_URL;

if (!URI) {
  console.error("⚠️ MongoDB URI not found in environment variables. Set process.env.URI or process.env.MONGO_URI");
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // fail fast after 10s
  // poolSize: 5, // optional: tune for your host
};

// Reuse mongoose connection in serverless environments (Vercel, Netlify functions, etc.)
let cached = global._mongoose; // use a global variable name unlikely to collide
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    // already connected
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(URI, options)
      .then((mongooseInstance) => {
        console.log("MongoDB Connected ✔️");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("MongoDB connection error ❌", err);
        // allow future retry
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

// helper to return mongoose readyState (0..3)
export const getReadyState = () => mongoose.connection.readyState;

export default connectDB;
