import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const connection = mongoose.createConnection(MONGO_URI);
const AutoIncrement = AutoIncrementFactory(connection);

const ProductSchema = mongoose.Schema({
    Id: {
        type: Number,
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

ProductSchema.plugin(AutoIncrement, { inc_field: 'Id' });

export const Product = mongoose.model('Product', ProductSchema); // Changed 'Schema' to 'model'

