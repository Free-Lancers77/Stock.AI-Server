

import { addProduct, deleteProduct, findItem, Pricing, UpdateProduct, GetAllProducts,Sell,Jarde} from "../controllers/ProductsControler.js";
import express from "express";

import { query} from 'express-validator';

const router = express.Router();

router.post("/AddProduct", addProduct);

router.post("/findProduct",findItem);
 

router.post("/deleteProduct",deleteProduct);
router.post("/Pricing",Pricing);

router.post("/UpdateProduct", query('filter').isString(), UpdateProduct);

router.get("/getAllProducts",GetAllProducts);
router.post("/Sell",Sell);
router.get("/Jarde",Jarde);
  
export default router;