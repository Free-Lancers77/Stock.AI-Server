import { Product } from "../models/ProductModel.js";


// Function to add a new Product to the database
export const addProduct = async (Name, Price, Quantity, NbOfPieces, PricePerUnit) => {
    try {
      // Create a new Product instance
      const product = new Product({Name, Price, Quantity, NbOfPieces, PricePerUnit});
  
      // Save the Product to the database
       await product.save();
  
      console.log('Product added:', Product);
    } catch (err) {
      console.error('Error adding Product ',err);
    }
  };
  