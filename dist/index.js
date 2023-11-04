"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const helmet_1 = __importDefault(require("helmet"));
const xssFilter_1 = require("./middleware/xssFilter");
const index_1 = require("@routes/index");
require("module-alias/register");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(xssFilter_1.xssFilter);
app.use("/api", index_1.router);
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.listen(port, () => {
    console.log(`Chess application server listening on ${port}`);
});
