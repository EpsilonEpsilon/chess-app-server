import mongoose from "mongoose";

class Database{
    // @ts-ignore
    private connection:mongoose.Connection
    constructor() {
        mongoose.connect(process.env.DATABASE_URL!);
        this.connection = mongoose.connection;
        this.connection.once("connected", ()=>{
            console.log("Connected to database");
        })

        this.connection.on("error", (error)=>{
            console.log("Database error", error);
        })
    }

}

const db = new Database();
export default db;
