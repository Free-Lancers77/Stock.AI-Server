import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        unique: true
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
}, { timestamps: true });

export const Product = mongoose.model('Product', ProductSchema); // Changed 'Schema' to 'model'
