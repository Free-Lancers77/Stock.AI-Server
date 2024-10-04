import { Product } from "../models/ProductModel.js";

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

  export const Update=async(req,res)=>{  
   const place_holder=req.params.filter;
   const id=req.body;
   try{
    const target=Product.findOne({id:id});
    target.place_holder=place_holder;
    

   }catch(Error){
       console.log(Error);
       return res.status(400).json({success:false,message:"Error"});
   }

  }
  export const Sell=async(req,res)=>{
    try{
        const {id,numb_to_sell}=req.body;
        const target=await Product.findOne({id:id});
        target.TotalNbOfPieces=target.TotalNbOfPieces-numb_to_sell;
        const profit=numb_to_sell*target.Price_to_Sell;
        await target.save();
        return res.status(200).json({success:true,message:"Product sold successfully",product:target,profit});

    }
    catch(err){
        console.log(err);
        return res.status(400).json({success:false,message:"Error"});
    }
  }