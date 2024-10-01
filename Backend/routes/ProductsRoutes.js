import { addProduct } from "../controllers/ProductsControler.js";
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
  
export default router;