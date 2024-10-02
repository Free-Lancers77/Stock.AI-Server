import { Product } from "../models/ProductModel.js";

// Function to add a new Product to the database
export const addProduct = async (req, res) => {
    const { id,Name, Price, Quantity, NbOfPieces, PricePerUnit} = req.body;

    try {
        // Validate required fields
        if (!Name || !Price || !id) {
            return res.status(400).json({ message: "Name, Price, and SerieNumber are required" });
        }

        // Check if the SerieNumber already exists in the database
        const existingProduct = await Product.findOne({ id });
        if (existingProduct) {
            return res.status(400).json({ message: "Product with this SerieNumber already exists" });
        }

        // Create a new Product instance
        const product = await Product.create({
            id,
            Name,
            Price,
            Quantity,
            NbOfPieces,
            PricePerUnit
        });

        // Return the created product
        console.log('Product added:', product);
        return res.status(201).json(product);

    } catch (err) {
        console.error('Error adding product:', err);
        return res.status(500).json({ message: 'Failed to add product', error: err.message });
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
  