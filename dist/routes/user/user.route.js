"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../controller/index");
const router = (0, express_1.Router)();
router.route("/profile").get(index_1.profileController);
exports.default = router;
