"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../model/index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.JWT_SECRET;
const verifyToken = (req, res) => {
    var _a;
    const response = new index_1.ResponseBuilder();
    const token = (_a = req.body) === null || _a === void 0 ? void 0 : _a.token;
    if (!token) {
        response.setData({ verified: false });
        res.send(response.build());
    }
    jsonwebtoken_1.default.verify(token, jwtSecret, (error, decoded) => {
        if (!error)
            response.setData({ verified: true });
        else
            response.setData({ verified: false });
        res.send(response.build());
    });
};
exports.default = verifyToken;
