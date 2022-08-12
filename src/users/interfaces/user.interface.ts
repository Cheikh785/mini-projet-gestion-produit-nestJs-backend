import mongoose from "mongoose";

export interface User extends mongoose.Document {
    id          : Number;
    firstname   : String;
    lastname    : String;
    address     : String;
}