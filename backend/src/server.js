import express from "express";
import dotenv from "dotenv"

const app = express()
dotenv.config();

app.get("/api/auth/signup", (req, res)=> {
    res.send("Signup endpoint");
})

app.get("/api/auth/login", (req,res)=>{
    res.send("Login endpoint");
})

app.get("/api/auth/logout", (req, res)=>{
    res.send("Logout endppint");
})

const PORT = process.env.PORT || 3000

app.listen(3000, () => { console.log("Server running on port:" + PORT)});