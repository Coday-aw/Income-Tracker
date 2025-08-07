"use server";
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Conncted to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to MongoDB", error.message);
    } else {
      console.error("error connecting to MongoDB", error);
    }
  }
}
