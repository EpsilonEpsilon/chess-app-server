"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_sheme_1 = require("../../database/scheme/user.sheme");
const index_1 = require("../../model/index");
const index_2 = require("../../lib/index");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const response = new index_1.ResponseBuilder();
    if (!email)
        response.addError({ field: "email", error: "Email is required" });
    if (!password)
        response.addError({ field: "password", error: "Password is required" });
    if (response.hasError()) {
        res.status(403).send(response.build());
        return;
    }
    const user = yield user_sheme_1.UserModel.findOne({ email: email });
    if (!user) {
        response.addError({ field: "email", error: "Invalid email" });
        res.status(400).send(response.build());
        return;
    }
    const isComparedPassword = yield user.isValidPassword(password);
    if (!isComparedPassword) {
        response.addError({ field: "password", error: "Invalid password" });
        res.status(400).send(response.build());
        return;
    }
    const token = (0, index_2.createJwtToken)({ email: user.email, password: user.password });
    response.setData({ token });
    res.send(response.build());
});
exports.default = loginController;
