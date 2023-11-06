"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalRouter = exports.userRoute = exports.authRoute = void 0;
var auth_route_1 = require("./auth/auth.route");
Object.defineProperty(exports, "authRoute", { enumerable: true, get: function () { return __importDefault(auth_route_1).default; } });
var user_route_1 = require("./user/user.route");
Object.defineProperty(exports, "userRoute", { enumerable: true, get: function () { return __importDefault(user_route_1).default; } });
var router_1 = require("./router");
Object.defineProperty(exports, "globalRouter", { enumerable: true, get: function () { return __importDefault(router_1).default; } });
