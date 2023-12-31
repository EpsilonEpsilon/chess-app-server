"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openapiSpecification = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express.js chess-server documentation',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:2000/api",
            },
            {
                url: "https://chess-app-server.vercel.app/api"
            }
        ],
    },
    apis: [path_1.default.join(__dirname, './**/*.+(ts|js)')], // files containing annotations as above
};
exports.openapiSpecification = (0, swagger_jsdoc_1.default)(options);
