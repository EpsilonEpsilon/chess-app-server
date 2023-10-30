import {Response, Request, NextFunction} from "express";
import xss from "xss";
export const xssFilter = async (req:Request, res:Response,next:NextFunction)=>{
    if(req.body){
        for(let key of Object.keys(req.body)){
            req.body[key] = xss(req.body[key]);
        }
    }
    next();
}
