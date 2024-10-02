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

  export const findItem = async (name) => {
    try {
      // Use a regular expression for case-insensitive search
      const products = await Product.find({ Name: { $regex: name, $options: 'i' } });
  
      if (products.length > 0) {
        console.log(`Found ${products.length} product(s) matching the name "${name}":`, products);
        return products;
      } else {
        console.log(`No products found with the name "${name}".`);
        return [];
      }
    } catch (err) {
      console.error('Error searching for products by name:', err);
      throw err;
    }
  };


  export const deleteProduct = async (Id)=> {
    try {
        // Find the product by custom Id and delete it
        const result = await Product.findOneAndDelete({ Id });
        if (result) {
          console.log(`Product with custom ID ${Id} deleted`);
          
        } else {
          console.log(`Product with custom ID ${Id} not found`);
          
        }
      } catch (err) {
        console.error('Error deleting product:', err);
      }
  };
  