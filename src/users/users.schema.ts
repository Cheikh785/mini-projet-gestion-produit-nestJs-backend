import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id          : { type : Number, required: false },
    firstname   : { type : String, required: true  },
    lastname    : { type : String, required: true  },
    address     : { type : String, required: true  }
})