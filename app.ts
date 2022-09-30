import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"


import router from "./routes/userRouter";

const app:express.Application = express();

app.use(cors({
    credentials:true,
    methods:['GET','POST'],
    origin:"http://localhost:3000"
}));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/",router);

mongoose.connect("mongodb://localhost:27017/crudapp")
.then((result)=>{
    console.log("MongoDB connected");
    app.listen(5004,()=>{
        console.log("Server Connected")
    })
})
.catch(err=>console.log("Error"))