import {Request, Response} from "express";
import {ResponseBuilder} from "@model/index";
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET
interface IBody{
    token:string,
}
const verifyToken = (req:Request<{}, {}, IBody>, res:Response)=>{
    const response = new ResponseBuilder();
    const token = req.body?.token
    if(!token){
        response.setData({verified:false});
        res.send(response.build());
    }
     jwt.verify(token, jwtSecret, (error, decoded)=>{
        if(!error) response.setData({verified:true})
        else response.setData({verified:false})
        res.send(response.build());
    })
}


export default verifyToken;
