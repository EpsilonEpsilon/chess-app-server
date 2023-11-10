import {NextFunction, Request, Response} from "express";
import {createUser} from "@database/models/user.model";
import {IUser} from "@database/scheme/user.sheme";
import {ErrorBuilder, ResponseBuilder} from "@model/index";
import {createJwtToken} from "@lib/index";

interface IReqBody{
    username:string | undefined,
    email:string | undefined,
    password:string | undefined,
    passwordConfirmation:string | undefined,
}

type ReqBodyKey = "username" | "email" | "password" | "passwordConfirmation";
const registerController = async(req:Request<{}, {}, IReqBody>, res:Response, next:NextFunction)=>{
    const response = new ResponseBuilder();
    const bodyFields:ReqBodyKey[] = ["username", "email", "password", "passwordConfirmation"];
    for(let key of bodyFields){
        if(!req.body[key]) response.addError({field:key,error:`${key} is required`});
    }
    if(response.hasError()) return res.status(400).send(response.build());

    const body = req.body as IUser;

    try{
        const user = await createUser(body);
        const token = createJwtToken({email:user.email, password:user.password});
        response.setData({token:token})
        return res.send(response.build());
    }catch (e){
        const response = new ResponseBuilder();
        response.addError({error:"Creating new user error"});
        return res.status(400).send(response.build());
    }
}

export default registerController;
