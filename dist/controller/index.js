"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = exports.loginController = exports.registerController = void 0;
var register_controller_1 = require("./auth/register.controller");
Object.defineProperty(exports, "registerController", { enumerable: true, get: function () { return __importDefault(register_controller_1).default; } });
var login_controller_1 = require("./auth/login.controller");
Object.defineProperty(exports, "loginController", { enumerable: true, get: function () { return __importDefault(login_controller_1).default; } });
var profile_controller_1 = require("./user/profile.controller");
Object.defineProperty(exports, "profileController", { enumerable: true, get: function () { return __importDefault(profile_controller_1).default; } });
