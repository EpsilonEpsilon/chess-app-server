"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor() {
        this.error = [];
    }
    add(field, errorText) {
        this.error.push({ field, errorText });
    }
    hasError() {
        return !!this.error.length;
    }
    send() {
        return this.error;
    }
}
exports.default = Error;
