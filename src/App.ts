import express, {Express} from 'express'
import "dotenv/config"
import helmet from "helmet";
import {authorization, xssFilter} from "@middleware/index";
import {globalRouter} from "@routes/index";
import 'module-alias/register';
import fileUpload from "express-fileupload";
import cors from "cors"
import swaggerUi from "swagger-ui-express";
import {openapiSpecification} from "./docs";
import * as http from "http";


const PORT =  process.env.PORT
class App{
    private app:Express
    private port = PORT || 8080
    constructor() {
        this.app =  express();
    }
    public bootstrap(){
        this.app.use("/docs", swaggerUi.serve);
        this.app.use("/public", express.static("public/swagger-ui/dist/swagger.css"));
        this.app.get("/docs", swaggerUi.setup(openapiSpecification, {customCssUrl:"https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.css", customCss:"https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.css"}, {}, "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.min.css"))
        this.initMiddlewares();
        this.initRoutes();
        this.runServer();
    }

    private initMiddlewares(){
        this.app.use(cors());
        this.app.use(fileUpload());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(xssFilter());
        this.app.use(authorization())
    }

    private initRoutes(){
        this.app.use("/api", globalRouter);
        this.app.use(
            express.urlencoded({
                extended: true,
            }),
        );
    }

    private runServer(){
        this.app.listen(this.port, () => {
            console.log(`Chess application server listening on ${this.port}`);
        })
    }

}



export default App;
