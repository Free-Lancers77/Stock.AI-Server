import { addProduct, deleteProduct, findItem } from "../controllers/ProductsControler.js";
import express from "express";

const router = express.Router();

router.post("/AddProduct", addProduct);

router.post("/findProduct",findItem);
 

router.post("/deleteProduct", async (req,res) => {
    const {Name} = req.body;

    const item = findItem(Name);
    if(item){
        deleteProduct(item._id);
    }
});
  
export default router;