import {NextFunction, Request, Response} from "express";
import {decodeJwtToken} from "@lib/index";
const authorization = ()=>{
    return (req:Request,res:Response, next:NextFunction)=>{
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) return next();

        const data = decodeJwtToken(token);
        if(!data) return next();

        const {email, password} = data;
        if(!email || !password) return next();

        req.locals = {email, password};
        next();
    }
}

export default authorization;
