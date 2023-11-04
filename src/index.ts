import express from 'express'
import "dotenv/config"
import helmet from "helmet";
import {xssFilter} from "@middleware/xssFilter";
import {router} from "@routes/index";
import 'module-alias/register';


const app = express()
const port = process.env.PORT || 8080

app.use(express.json());
app.use(helmet());
app.use(xssFilter);


app.use("/api", router);
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.listen(port, () => {
    console.log(`Chess application server listening on ${port}`);
})
