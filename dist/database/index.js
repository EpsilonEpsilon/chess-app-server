"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        mongoose_1.default.connect(process.env.DATABASE_URL);
        this.connection = mongoose_1.default.connection;
        this.connection.once("connected", () => {
            console.log("Connected to database");
        });
        this.connection.on("error", (error) => {
            console.log("Database error", error);
        });
    }
}
const db = new Database();
exports.default = db;
