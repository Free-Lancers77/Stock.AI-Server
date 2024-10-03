import { addProduct, deleteProduct, findItem } from "../controllers/ProductsControler.js";
import express from "express";

const router = express.Router();

router.post("/AddProduct", addProduct);

router.post("/findProduct",findItem);
 

router.post("/deleteProduct",deleteProduct)
  
export default router;