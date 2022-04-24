const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true 
    },
    imageURL:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    }
})

const Product = mongoose.model("product" , ProductSchema);

module.exports = Product;