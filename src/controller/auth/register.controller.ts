import {Request, Response} from "express";
import {createError} from "../../lib/createError";

interface IReqBody{
    name:string | undefined,
    email:string | undefined,
    password:string | undefined,
    passwordConfirmation:string | undefined,
}
export const registerController = async(req:Request<{}, {}, IReqBody>, res:Response)=>{
    const error = createError();
    for(let key of ["name", "email", "password", "passwordConfirmation"]){
        // @ts-ignore
        if(!req.body[key]) error.add(key, `${key} is required`);
    }

    if(error.hasError()){
        res.status(400).json(error.send());
        return;
    }

    res.send("OK 200")
}
