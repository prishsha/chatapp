import express, { Router } from "express"
import { signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup)

router.get("/login", (req,res)=>{
    res.send("Login endpoint");
})

router.get("/logout", (req, res)=>{
    res.send("No endpoint");
})

export default router;