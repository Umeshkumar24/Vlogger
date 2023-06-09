import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import postRouter from "./routes/post-routes";
import cors from "cors";

dotenv.config();
const port = 5000;
const app =  express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/user" , userRouter);
app.use("/posts", postRouter);

//connections
mongoose.set('strictQuery', true);
mongoose.connect(
`mongodb+srv://tester101:test101@cluster0.qzxasxt.mongodb.net/?retryWrites=true&w=majority`
    ).then (() => {
        app.listen(port, () => 
            console.log(`Listening to localhost ${port}`))
    }).catch(err => console.log(err));

// app.listen(5000, () => 
//            console.log(`Listening to localhost ${5000}`))