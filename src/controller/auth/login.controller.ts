import {Request, Response} from "express";
import {UserModel} from "@database/scheme/user.sheme";
import {ErrorBuilder, ResponseBuilder} from "@model/index";
import {createJwtToken} from "@lib/index";

interface IReqBody{
    email:string,
    password:string,
}

const loginController = async (req:Request<{}, {}, IReqBody>,res:Response)=>{
    const {email, password} = req.body;
    const response = new ResponseBuilder();
    if(!email) response.addError({field: "email", error:"Email is required"});
    if(!password) response.addError({field:"password", error:"Password is required"});
    if(response.hasError()){
        res.status(403).send(response.build())
        return;
    }

    const user = await UserModel.findOne({email:email});
    if(!user){
        response.addError({field:"email", error:"Invalid email"});
        res.status(400).send(response.build());
        return;
    }

    const isComparedPassword = await user.isValidPassword(password);

    if(!isComparedPassword){
        response.addError({field:"password", error:"Invalid password"});
        res.status(400).send(response.build());
        return;
    }

    const token = createJwtToken({email:user.email, password:user.password});
    response.setData({token});
    res.send(response.build());
}

export default loginController;
