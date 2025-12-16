import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(conn.connection.host, " Connected to Mongodb");
  } catch (error) {
    console.error("Error found connecting to MongoDB");
    process.exit(1); //0 means success, 1 means fail
  }
};
