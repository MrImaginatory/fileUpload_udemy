import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        minLength:3,
        required:['true',"Product Name required!"]
    },
    description:{
        type:String,
        minLength:3,
        maxLength:100,
        required:['true',"Product description required!"]
    },
    price:{
        type:Number,
        min:0.99,
        required:['true',"Product Price required!"]
    },
    imagePath:{
        type:String,
        required:['true',"Product Image required!"]
    }
},{timestamps:true})

export default mongoose.model("Product",productSchema);