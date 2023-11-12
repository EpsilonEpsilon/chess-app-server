import {Router} from "express";
import {loginController, registerController, verifyTokenController} from "@controllers/index";

const router = Router();
router.route("/registration").post(registerController);
router.route("/login").post(loginController);
router.route("/verify").post(verifyTokenController);
export default router;
