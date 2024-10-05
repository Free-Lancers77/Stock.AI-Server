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
   Items_Sold: {
       type: Number,
       default: 0,
   },
   date_of_purchase: {
       type: Date,
       default: Date.now
   },
   date_of_sell:{
       type: Date,
       default:null
   },
   Profit:{
       type:Number,
       default:0
   },
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } 
}, { timestamps: true });

export const Product = mongoose.model('Product', ProductSchema);
