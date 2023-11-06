"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorBuilder_1 = __importDefault(require("../ErrorBuilder/ErrorBuilder"));
class ResponseBuilder extends ErrorBuilder_1.default {
    constructor(data) {
        super();
        this.data = data;
    }
    setData(data) {
        this.data = data;
    }
    build() {
        if (this.hasError())
            return this.buildError();
        return {
            status: "success",
            data: this.data
        };
    }
}
exports.default = ResponseBuilder;
