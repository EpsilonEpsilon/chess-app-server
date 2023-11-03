import {IUser, UserModel} from "@database/index";

export const createUser = async(user:IUser)=>{
    const userDocument = new UserModel(user);
    return userDocument.save();
}
