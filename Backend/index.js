import express from "express";
import  { DbConnect } from "./db/config.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

//i used this to make the .env file work
//im using import statement when i modfied in the pacakge.json and put type:module
import dotnev from "dotenv";
/////////////////////////////////////////////////////////////////
dotnev.config();
const app = express();
const Port=process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);

///////////////////////////////////////////////////////
app.listen(Port, () => {
    DbConnect();
    console.log(`Server is running on port ${Port}`);
});
