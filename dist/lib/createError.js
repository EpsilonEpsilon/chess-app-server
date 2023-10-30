"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = void 0;
const createError = () => {
    const errors = [];
    return {
        add: (field, errorText) => {
            if (!errorText)
                errorText = `${field} is invalid`;
            errors.push({ field, error: errorText });
        },
        hasError: () => {
            return !!errors.length;
        },
        send: () => {
            return errors;
        }
    };
};
exports.createError = createError;
