import mongoose from "mongoose";
 export const DbConnect=async()=>{
    
    try {
        const con=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected:${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
