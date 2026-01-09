import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export const protectRoute = async (req, res, next) => {
    try 
    {
        const token = req.cookies.jwt
        if(!token)
        {
            return res.status(401).json({
                message: "Unauthorized- no token provided"
            })
        }
        const decoded = jwt.verify(token, process.ENV.JWT_SECRET);

        if(!decoded)
        {
            return res.status(401).json({
                message: "Unauthorized- invalid token provided"
            })
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user)
        {
            return res.status(400).json({
                message: "User not found"
            });
        }
        req.user = user;
        next();
    }
    catch(error)
    {
        console.error("Error in accessing token: ", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}