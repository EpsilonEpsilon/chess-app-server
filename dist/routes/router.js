"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("./index");
const router = (0, express_1.Router)();
router.use("/auth", index_1.authRoute);
router.use("/user", index_1.userRoute);
exports.default = router;
