import {Router} from "express";
import {profileController} from "@controllers/index";

const router = Router();

router.route("/profile").get(profileController);
export default router;
