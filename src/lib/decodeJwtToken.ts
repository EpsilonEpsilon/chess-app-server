import jwt from "jsonwebtoken";

interface IDecode{
    email:string | undefined,
    password:string | undefined,
}
const secret = process.env.JWT_SECRET
const decodeJwtToken = (token:string):Promise<IDecode | undefined>=>{
    return new Promise((res, rej)=>{
        jwt.verify(token, secret, (error, decoded)=>{
            res(decoded as IDecode);
        })
    })
}

export default decodeJwtToken;
