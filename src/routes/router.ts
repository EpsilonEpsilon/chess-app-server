import {Router} from "express";
import authRoute from "./auth/auth.route";


export const router = Router();

router.use("/auth", authRoute);

