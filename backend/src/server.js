import express from "express"
import dotenv from "dotenv"
import path, { dirname } from "path"
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"
import { connectDB } from "./lib/db.js"

const app = express()
const __dirname = path.resolve(); 
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
}

const PORT = process.env.PORT || 3000

app.listen(PORT, () => { 
    console.log("Server running on port:" + PORT)
    connectDB();
});