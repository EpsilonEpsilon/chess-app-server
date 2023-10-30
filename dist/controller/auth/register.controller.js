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
exports.registerController = void 0;
const createError_1 = require("../../lib/createError");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, createError_1.createError)();
    for (let key of ["name", "email", "password", "passwordConfirmation"]) {
        // @ts-ignore
        if (!req.body[key])
            error.add(key, `${key} is required`);
    }
    if (error.hasError()) {
        res.status(400).json(error.send());
        return;
    }
    res.send("OK 200");
});
exports.registerController = registerController;
