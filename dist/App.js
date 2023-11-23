"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const helmet_1 = __importDefault(require("helmet"));
const index_1 = require("./middleware/index");
const index_2 = require("./routes/index");
require("module-alias/register");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const docs_1 = require("./docs");
const PORT = process.env.PORT;
class App {
    constructor() {
        this.port = PORT || 8080;
        this.app = (0, express_1.default)();
        this.app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(docs_1.openapiSpecification, { customJs: "https://cdn.jsdelivr.net/npm/swagger-ui-express@5.0.0/index.min.js" }));
    }
    bootstrap() {
        this.initMiddlewares();
        this.initRoutes();
        this.runServer();
    }
    initMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, express_fileupload_1.default)());
        this.app.use(express_1.default.json());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, index_1.xssFilter)());
        this.app.use((0, index_1.authorization)());
    }
    initRoutes() {
        this.app.use("/api", index_2.globalRouter);
        this.app.use(express_1.default.urlencoded({
            extended: true,
        }));
    }
    runServer() {
        this.app.listen(this.port, () => {
            console.log(`Chess application server listening on ${this.port}`);
        });
    }
}
exports.default = App;
