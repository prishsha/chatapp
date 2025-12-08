import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"

const app = express()
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 3000

app.listen(3000, () => { console.log("Server running on port:" + PORT)});