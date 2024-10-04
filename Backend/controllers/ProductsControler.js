import { Product } from "../models/ProductModel.js";
import { validationResult } from "express-validator";
// Function to add a new Product to the database

export const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    console.error('Error getting products:', err);
    return res.status(500).json({ message: 'Failed to get products', error: err.message });
  }
}
export const addProduct = async (req, res) => {
    const { id,Name, Price, Quantity, NbOfPieces,PriceToSell} = req.body;

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
        const price=Price/NbOfPieces;
        const totalnub=NbOfPieces*Quantity;
        // Create a new Product instance
        const product = await Product.create({
            id,
            Name,
            Price,
            Quantity,
            NbOfPieces,
            PricePerUnit:price,
            Price_to_Sell:PriceToSell,
            TotalNbOfPieces:totalnub
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
  export const Pricing=async(req,res)=>{  
    const {id,precentage_of_profit}=req.body;
    try{
        const target_product=await Product.findOne({id:id});
        if(!target_product || precentage_of_profit<=0){
          return res.status(400).json({success:false,message:"Invalid data"});
        }
        const new_price=target_product.Price*(1+precentage_of_profit/100);
        target_product.Price_to_Sell=new_price;
        await target_product.save();
        return res.status(200).json({success:true,message:"Price updated successfully",product:target_product});
    }
    catch(Error){
        console.log(Error);
        return res.status(400).json({success:false,message:"Error"});
    }
  }

  export const UpdateProduct = async (req, res) => {
    // Accessing the query parameters using req.query
    const { filter, value } = req.query;
    const updateData = req.body;
  
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
  
    if (!filter || !value) {
      return res.status(400).json({ message: "Both filter and value are required for updating a product." });
    }
  
    try {
      // Find the product by the filter (e.g., id, Name) and value
      const product = await Product.findOne({ [filter]: value });
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Update the product's data with the new values from updateData
      Object.keys(updateData).forEach((key) => {
        product[key] = updateData[key];
      });
  
      const updatedProduct = await product.save();
  
      return res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      return res.status(500).json({ message: "Error updating product", error });
    }
  };
  

export const Sell=async(req,res)=>{
  const {id,number_to_sell}=req.body;
  try{
    if(!id || !number_to_sell){
      return res.status(400).json({success:false,message:"Invalid data"});
    }
    const targetproduct=await Product.findOne({id:id});
    if(!targetproduct || number_to_sell<=0){
      return res.status(400).json({success:false,message:"Invalid data"});
    }
    if(number_to_sell>targetproduct.TotalNbOfPieces){
      return res.status(400).json({success:false,message:"amount pf stock is not enough"});
    }
    targetproduct.TotalNbOfPieces=targetproduct.TotalNbOfPieces-number_to_sell;
    targetproduct.date_of_sell=Date.now();
    targetproduct.Items_Sold+=number_to_sell
    const cash=targetproduct.Price_to_Sell*number_to_sell;
    targetproduct.Profit=cash;
    await targetproduct.save();
  
    return res.status(200).json({success:true,message:"Product sold successfully",product:targetproduct});
 
  }
  catch(err){
    console.log(err);
    return res.status(400).json({success:false,message:"Error"});

  }
}
export const Jarde = async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products from the database
    let Totalcash = 0;                      // Use 'let' since we will modify it
    const Jarde_Date = Date.now();          // Capture the current date
    
    products.forEach(product => {
      Totalcash += product.Profit;          // Sum the profit of all products
    });

    // If you want to return details of each product along with the total cash:
    return res.status(200).json({
      success: true,
      message: "CashOut",
      Totalcash: Totalcash,
      products: products.map(product => ({
        productId: product.id,
        productName: product.Name,
        itemsSold: product.Items_Sold,
        profit: product.Profit
      })),
      Jarde_Date: Jarde_Date
    });

  } catch (err) {
    console.error(err);                      // Log the error to the console
    return res.status(400).json({ success: false, message: "Error" });
  }
};

export const AddQuantity = async (req, res) =>{
  const { id , newQuantity}= req.body;

  try{
    const item = await Product.findOne({ id: id }); 
    if (!item) {
      return res.status(404).json({ message: "Product not found" });
    }
    item.Quantity += newQuantity;

    const updatedQuantity = await item.save();

    console.log("Quantity added successfully");
    return res.status(200).json(updatedQuantity);
  }
  catch(error){
    console.error("Error adding quantity:", error);
    return res.status(500).json({ message: "Error adding quantity", error });
  }
}