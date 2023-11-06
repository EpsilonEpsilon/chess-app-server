import express from 'express'
import "dotenv/config"
import helmet from "helmet";
import {authorization, xssFilter} from "@middleware/index";
import {globalRouter} from "@routes/index";
import 'module-alias/register';
import fileUpload from "express-fileupload";

const app = express()
const port = process.env.PORT || 8080

app.use(fileUpload());
app.use(express.json());
app.use(helmet());
app.use(xssFilter());
app.use(authorization())

app.use("/api", globalRouter);
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.listen(port, () => {
    console.log(`Chess application server listening on ${port}`);
})
