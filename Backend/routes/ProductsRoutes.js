

import { addProduct, deleteProduct, findItem, Pricing, UpdateProduct, GetAllProducts,Sell,Jarde, AddQuantity,GetStock} from "../controllers/ProductsControler.js";
import express from "express";
import { authenticate } from "../middleware/verifytoken.js";
import { query} from 'express-validator';

const router = express.Router();

router.post("/AddProduct",authenticate, addProduct);

router.post("/findProduct",authenticate,findItem);
 

router.post("/deleteProduct",authenticate,deleteProduct);
router.post("/Pricing",authenticate,Pricing);

router.post("/UpdateProduct", query('filter').isString(), authenticate,UpdateProduct);

router.get("/getAllProducts",authenticate,GetAllProducts);
router.post("/Sell",authenticate,Sell);
router.get("/Jarde",authenticate,Jarde);
router.post("/AddQuantity",authenticate,AddQuantity);
router.get("/Stock",authenticate,GetStock);
  
export default router;