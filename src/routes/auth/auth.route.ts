import {Router} from "express";
import {registerController} from "../../controller/auth/register.controller";

const router = Router();
router.route("/register").post(registerController);
export default router;
