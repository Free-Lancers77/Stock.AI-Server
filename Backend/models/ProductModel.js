import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true

    },
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Quantity: {
        type: Number,
        default: 0,
    },
    NbOfPieces: {
        type: Number,
        default: 0,
    },
    PricePerUnit: {
        type: Number,
        default: 0,
    },
    Price_to_Sell: {
        type: Number,
        default: 0,
    },
    TotalNbOfPieces: {
        type: Number,
        default: 0,
    },
   
}, { timestamps: true });

export const Product = mongoose.model('Product', ProductSchema);
