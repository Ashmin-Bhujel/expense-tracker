import environment from "@/environment.js";
import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect(environment.MONGODB_URI, {
    dbName: environment.MONGODB_DBNAME,
  });
}
