import {Router} from "express";
import {loginController, registerController} from "@controllers/index";

const router = Router();
router.route("/registration").post(registerController);
router.route("/login").post(loginController);

export default router;
