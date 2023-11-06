"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../lib/index");
const authorization = () => {
    return (req, res, next) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token)
            return next();
        const data = (0, index_1.decodeJwtToken)(token);
        if (!data)
            return next();
        const { email, password } = data;
        if (!email || !password)
            return next();
        req.locals = { email, password };
        next();
    };
};
exports.default = authorization;
