import mongoose from 'mongoose';
import 'dotenv/config';

const DB_URI = process.env.DB_CONNECTION_STRING;

if (!DB_URI) {
  console.error("FATAL ERROR: DB_CONNECTION_STRING is not defined in environment variables.");
  process.exit(1);
}

async function connectDB() {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("ERROR: Failed to connect with database.", error);
    process.exit(1);
  }
}

export default connectDB;