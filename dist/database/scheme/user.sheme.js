"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const userDataSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [emailRegExp, 'Please fill a valid email address'],
        validate: [emailRegExp, 'Please fill a valid email address'],
    },
    password: {
        required: true,
        type: String,
    },
    passwordConfirmation: {
        required: true,
        type: String
    }
});
exports.default = userDataSchema;
