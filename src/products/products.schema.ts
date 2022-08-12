import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    id       : { type : Number, required: false },
    name     : { type : String, required: true  },
    price    : { type : Number, required: true  },
    quantity : { type : Number, required: true  },
    image    : { type : String, required: false }
})