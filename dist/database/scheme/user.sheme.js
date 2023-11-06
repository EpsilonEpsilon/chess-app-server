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
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT = 10;
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
userDataSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!this.isModified("password"))
                return next();
            const salt = yield bcrypt_1.default.genSalt(SALT);
            this.password = yield bcrypt_1.default.hash(this.password, salt);
            this.passwordConfirmation = this.password;
            next();
        }
        catch (e) {
            next(e);
        }
    });
});
userDataSchema.methods.isValidPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt_1.default.compare(password, this.password);
    });
};
exports.UserModel = mongoose_1.default.model("User", userDataSchema);
