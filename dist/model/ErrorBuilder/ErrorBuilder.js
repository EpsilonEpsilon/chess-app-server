"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorBuilder {
    constructor() {
        this.errors = [];
    }
    addError(error) {
        this.errors.push(error);
    }
    buildError() {
        return {
            status: "error",
            errors: this.errors
        };
    }
    hasError() {
        return !!this.errors.length;
    }
}
exports.default = ErrorBuilder;
