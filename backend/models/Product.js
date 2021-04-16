const mongoose =require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        required:true,
        type:String
    },
    imageUrl:{
        type:String,
        required:true
    },
    countInStock:{
        required:true,
        type:Number
    }
});


const Product = mongoose.model('product',productSchema);
module.exports =Product;