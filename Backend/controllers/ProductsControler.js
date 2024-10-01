import { Product } from "../models/ProductModel.js";


// Function to add a new Product to the database
export const addProduct = async (Name, Price, Quantity, NbOfPieces, PricePerUnit) => {
    try {
      // Create a new Product instance
      const Product = new Product({Name, Price, Quantity, NbOfPieces, PricePerUnit});
  
      // Save the Product to the database
      const result = await Product.save();
  
      console.log('Product added:', result);
    } catch (err) {
      console.error('Error adding Product ',err);
    }
  };
  