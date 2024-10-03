
import { addProduct, deleteProduct, findItem, Pricing, UpdateProduct, GetAllProducts} from "../controllers/ProductsControler.js";
import express from "express";

const router = express.Router();

router.post("/AddProduct", addProduct);

router.post("/findProduct",findItem);
 

router.post("/deleteProduct",deleteProduct);
router.post("/Pricing",Pricing);

router.post("/api/UpdateProduct", query('filter').isString(), UpdateProduct);

router.get("/getAllProducts",GetAllProducts);
  
export default router;