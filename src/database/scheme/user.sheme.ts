import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT = 10;

export interface IUser extends mongoose.Document{
    username:string,
    email:string,
    password:string,
    passwordConfirmation:string,
    isValidPassword:(password:string)=>Promise<boolean>,
}

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const userDataSchema = new mongoose.Schema<IUser>({
    username:{
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

userDataSchema.pre("save", async function(next){
    try{
        if(!this.isModified("password")) return next();
        const salt = await bcrypt.genSalt(SALT);
        this.password = await bcrypt.hash(this.password, salt);
        this.passwordConfirmation = this.password;
        next();
    }catch(e:any){
        next(e);
    }
})

userDataSchema.methods.isValidPassword = async function(password:string){
    return bcrypt.compare(password, this.password);
}

export const UserModel =  mongoose.model("User", userDataSchema)
