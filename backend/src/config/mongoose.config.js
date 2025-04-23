import mongoose from 'mongoose';
import 'dotenv/config';

async function connectDB() {
  const DB_URI = process.env.DB_CONNECTION_STRING;

  if (!DB_URI) {
    console.error("FATAL ERROR: DB_CONNECTION_STRING is not defined in environment variables.");
    process.exitCode = 1;
    return;
  }
  
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("ERROR: Failed to connect with database.", error);
    process.exitCode = 1;
  }
}

export default connectDB;