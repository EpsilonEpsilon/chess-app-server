"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const decodeJwtToken = (token) => {
    return jsonwebtoken_1.default.decode(token);
};
exports.default = decodeJwtToken;
