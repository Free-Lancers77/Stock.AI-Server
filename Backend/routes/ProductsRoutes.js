import { addProduct, deleteProduct, findItem } from "../controllers/ProductsControler.js";
import express from "express";

const router = express.Router();

router.post("/AddProduct", async (req, res) => {
    const { Name, Price, Quantity, NbOfPieces, PricePerUnit } = req.body;
    try {
        await addProduct(Name, Price, Quantity, NbOfPieces, PricePerUnit);
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error });
    }
  });

router.post("/findProduct", async (req,res)=>{
    const {Name} = req.body;
    
    const Items = findItem(Name);
});

router.post("/deleteProduct", async (req,res) => {
    const {Name} = req.body;

    const item = findItem(Name);
    if(item){
        deleteProduct(item._id);
    }
});
  
export default router;