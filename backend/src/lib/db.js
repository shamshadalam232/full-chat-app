import mongoose from "mongoose";

export const connectDB = async () => {
try {
    const conn = await mongoose.connect(process.env.Mongo_URL);
    console.log(`Mongo connected: ${conn.connection.host}`)
} catch (error) {
    console.log("Mongodb connection error", error);
    
}
}