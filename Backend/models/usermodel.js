import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    LastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasstoken: String,
    resetPassExpiresAt: Date,
    verficationToken: String,
    verficationTocenExpiresAt: Date
}, { timestamps: true });

export const User = mongoose.model('User', userSchema); // Changed 'Schema' to 'model'
