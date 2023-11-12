"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../controller/index");
const router = (0, express_1.Router)();
router.route("/registration").post(index_1.registerController);
router.route("/login").post(index_1.loginController);
router.route("/verify").post(index_1.verifyTokenController);
exports.default = router;
