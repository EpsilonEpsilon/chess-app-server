import swaggerJSDoc from "swagger-jsdoc";
import path from "path";


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
    apis: [path.join(__dirname, './**/*.+(ts|js)')], // files containing annotations as above
};

export const openapiSpecification = swaggerJSDoc(options);
