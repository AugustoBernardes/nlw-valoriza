import { Request,Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

interface Ipayload{
    sub:string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    // Receive token 
    const authToken = req.headers.authorization
    
    if(!authToken){
        return(
            res.status(401).json({
                message:"Unauthorized token!"
            })
            
        )
    }

    const [,token] = authToken.split(" ")

   
    try {
        const { sub } = verify(token,JWT_SECRET ) as Ipayload
        
        req.user_id = sub

        return next();
    } catch (error) {
        return res.status(401).json({
            message:"Unauthorized token!"
        })
    }

}