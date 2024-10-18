import express from "express";
import  { DbConnect } from "./db/config.js";
import authRoutes from "./routes/authRoutes.js";
import ProductsRoutes from "./routes/ProductsRoutes.js";
import cookieParser from "cookie-parser";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger documentation/swagger.js';
import cors from "cors";

//i used this to make the .env file work
//im using import statement when i modfied in the pacakge.json and put type:module
import dotnev from "dotenv";
/////////////////////////////////////////////////////////////////
dotnev.config();
const app = express();

const Port=process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/products",ProductsRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

///////////////////////////////////////////////////////
app.listen(Port, () => {
    DbConnect();
    console.log(`Server is running on port ${Port}`);
});

console.log('Swagger docs available at http://localhost:5000/api-docs');
