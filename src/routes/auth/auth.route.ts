import {Router} from "express";
import {registerController} from "@controllers/auth/register.controller";

const router = Router();
router.route("/register").post(registerController);
export default router;
