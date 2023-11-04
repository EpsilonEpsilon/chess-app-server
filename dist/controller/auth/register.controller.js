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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const Error_1 = __importDefault(require("../../lib/Error"));
const user_model_1 = require("../../database/models/user.model");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const error = new Error_1.default();
    const bodyFields = ["name", "email", "password", "passwordConfirmation"];
    for (let key of bodyFields) {
        // @ts-ignore
        if (!req.body[key])
            error.add(key, `${key} is required`);
    }
    if (error.hasError()) {
        res.status(400).json(error.send());
        return;
    }
    try {
        // @ts-ignore
        const user = yield (0, user_model_1.createUser)(req.body);
        res.send({ message: "OK", user });
    }
    catch (e) {
        console.log(e);
        res.send("Error");
    }
});
exports.registerController = registerController;
