import jwt from "jsonwebtoken";

interface IDecode{
    email:string | undefined,
    password:string | undefined,
}
const decodeJwtToken = (token:string)=>{
    return jwt.decode(token) as IDecode | null;
}

export default decodeJwtToken;
