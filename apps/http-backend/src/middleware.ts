import { NextFunction,Request,Response } from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";

export function middleware(req:Request, res:Response, next:NextFunction){
     const token = req.headers["authorization"] || "";

     const decode = jwt.verify(token, JWT_SECRET);
     if(decode){
          next();
     }else{
          res.status(401).json({message:"Unauthorized"});
     }
}