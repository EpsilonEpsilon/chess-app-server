"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.JWT_SECRET;
const createJwtToken = (data, expires = "7d") => {
    return jsonwebtoken_1.default.sign({ email: data.email, password: data.password, }, jwtSecret, { expiresIn: expires });
};
exports.default = createJwtToken;
