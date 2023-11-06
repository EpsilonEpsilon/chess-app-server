import {Router} from "express";
import {authRoute, userRoute} from "@routes/index";

const router = Router();
router.use("/auth", authRoute);
router.use("/user", userRoute);

export default router
