import express from "express";

declare global {
    namespace Express {
        interface Request {
            locals:{
                email:string,
                password:string,
            }
        }
    }
}

export {};
