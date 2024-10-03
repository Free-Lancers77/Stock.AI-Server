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


export const findItem = async (req,res) => {
  const { Name } = req.body;
  try {
    // Use `find` instead of `findOne` to return an array of matching products
    const products = await Product.find({ Name: { $regex: Name, $options: 'i' } });

    if (products.length > 0) {
      console.log(`Found ${products.length} product(s) matching the name "${Name}":`, products);
      return res.status(200).json(products);
    } else {
      console.log(`No products found with the name "${Name}".`);
      return res.status(404).json({ message: 'No products found' });
    }
  } catch (err) {
    console.error('Error searching for products by name:', err);
    return res.status(500).json({ message: 'Failed to search for products', error: err.message });
  }
};


  export const deleteProduct = async (req, res)=> {
    const { id } = req.body;
    try {
        // Find the product by custom Id and delete it
        const result = await Product.findOneAndDelete({ id: id }); // Replace 'customId' with your actual field name

        if (result) {
          console.log(`Product with custom ID ${id} deleted`);
          return res.status(200).json({ message: 'Product deleted successfully' });
          
        } else {
          console.log(`Product with custom ID ${id} not found`);
          return res.status(404).json({ message: 'Product not found' });
          
        }
      } catch (err) {
        console.error('Error deleting product:', err);
        return res.status(500).json({ message: 'Failed to delete product', error: err.message });
      }
  };
  