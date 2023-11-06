import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET
const createJwtToken = (data:{email:string, password:string}, expires:string = "7d")=>{
    return jwt.sign({ email:data.email, password:data.password, }, jwtSecret!, {expiresIn:expires});
}


export default createJwtToken;
