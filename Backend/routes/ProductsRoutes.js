import { addProduct, deleteProduct, findItem, Pricing ,Update} from "../controllers/ProductsControler.js";
import express from "express";

const router = express.Router();

router.post("/AddProduct", addProduct);

router.post("/findProduct",findItem);
 

router.post("/deleteProduct",deleteProduct);
router.post("/Pricing",Pricing);
router.post("/update/:filter",Update);
  
export default router;