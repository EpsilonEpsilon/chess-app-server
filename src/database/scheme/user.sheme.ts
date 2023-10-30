import mongoose from "mongoose";

export interface IUser{
    name:string,
    email:string,
    password:string,
    passwordConfirmation:string,
}

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const userDataSchema = new mongoose.Schema<IUser>({
    name:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [emailRegExp, 'Please fill a valid email address'],
        validate:[emailRegExp, 'Please fill a valid email address'],
    },
    password:{
        required:true,
        type:String,
    },
    passwordConfirmation:{
        required:true,
        type:String
    }
})

export default userDataSchema;
