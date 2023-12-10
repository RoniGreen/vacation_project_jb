// const jwt = require("jsonwebtoken");
import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import { JwtError } from "../4-models/JwtError";
import { TokenModel } from "../4-models/TokenModel";
import { getUserRole } from "../5-logic/users-logic";


// function verifyLoggedIn(request, response, next) {
//     if (!request.headers.authorization)
//         return response.status(401).send("You are not logged in!");
//     const token = request.headers.authorization.split(" ")[1];

//     if (!token)
//         return response.status(401).send("You are not logged in!");

//     jwt.verify(token, config.jwtKey, (err, payload) => { 
//         if (err && err.message === "jwt expired")
//             return response.status(403).send("Your login session has expired.");

//         if (err)
//             return response.status(401).send("You are not logged in!");

     
//         next();
//     });
// }

//  module.exports = verifyLoggedIn;
//(userRoles: number[])
export function verifyUser(userRoles: number[]) {
    return async (req: Request , res: Response , next: NextFunction) => {
        // console.log(userRoles);
        
        
        
        
        if (!req.headers.authorization){
            return res.status(401).send("You are not logged in!");
        }
        
        const token = req.headers.authorization.substring(7);
        
        
        
        if (!token) {
            
            return  res.status(401).send("You are not logged in!");
        }

        try {
            // const { firstname } = decode(token) as TokenModel;
           
            
            
            
            // const  role  = await getUserRole(firstname);
            
            
            // if (!userRoles.includes(role)) {
            //     return res.status(403).send("Access Denied");
            // };

            verify(token, process.env.JWT_PASSWORD);
            
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        next();
    }
}