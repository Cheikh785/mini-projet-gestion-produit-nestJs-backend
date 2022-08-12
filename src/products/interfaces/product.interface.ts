import mongoose from "mongoose";
export interface Product extends mongoose.Document {
    id       : Number,
    name     : String,
    price    : Number,
    quantity : Number,
    image    : String
}