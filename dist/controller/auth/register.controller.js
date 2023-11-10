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
const user_model_1 = require("../../database/models/user.model");
const index_1 = require("../../model/index");
const index_2 = require("../../lib/index");
const registerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const response = new index_1.ResponseBuilder();
    const bodyFields = ["username", "email", "password", "passwordConfirmation"];
    for (let key of bodyFields) {
        if (!req.body[key])
            response.addError({ field: key, error: `${key} is required` });
    }
    if (response.hasError())
        return res.status(400).send(response.build());
    const body = req.body;
    try {
        const user = yield (0, user_model_1.createUser)(body);
        const token = (0, index_2.createJwtToken)({ email: user.email, password: user.password });
        response.setData({ token: token });
        return res.send(response.build());
    }
    catch (e) {
        const response = new index_1.ResponseBuilder();
        response.addError({ error: "Creating new user error" });
        return res.status(400).send(response.build());
    }
});
exports.default = registerController;
