import {Request,Response} from "express";
import {UserModel} from "@database/scheme/user.sheme";
import {ResponseBuilder} from "@model/index";

const profileController = async (req:Request, res:Response)=>{
    const user = req.locals;
    if(!user || !user.email || !user.password){
        return res.status(401).send("User is not authorized");
    }
    try{
        const userModel = await UserModel.findOne({email:user.email});
        if(!userModel){
            return res.status(401).send("User is not authorized");
        }
        if(user.password !== userModel.password){
            return res.status(401).send("User is not authorized");
        }
        const {password, passwordConfirmation,__v,  ...rest} = userModel.toObject()

        const response = new ResponseBuilder(rest);
        res.status(200).send(response.build());


    }catch (e){
        return res.send(e);
    }
}


export default profileController;
