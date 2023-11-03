import {Request, Response} from "express";
import Error from "../../lib/Error";
import {createUser} from "@database/models/user.model";

interface IReqBody{
    name:string | undefined,
    email:string | undefined,
    password:string | undefined,
    passwordConfirmation:string | undefined,
}
export const registerController = async(req:Request<{}, {}, IReqBody>, res:Response)=>{
    const error = new Error();
    const bodyFields = ["name", "email", "password", "passwordConfirmation"];
    for(let key of bodyFields){
        // @ts-ignore
        if(!req.body[key]) error.add(key, `${key} is required`);
    }


    if(error.hasError()){
        res.status(400).json(error.send());
        return;
    }

    try{
        // @ts-ignore
        const user = await createUser(req.body);
        res.send({message:"OK", user});
    }catch (e){
        res.send("Error");
    }

}
