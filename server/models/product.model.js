//import mongoose to build

const mongoose = require("mongoose");

//the schema - rules that entries in DB must follow

const ProductsSchema = new mongoose.Schema({
    title: {type:String,required:[true,"Title required"],minlength:[2,"Title must be atleast 2 chars"]},
    price: {type:Number,required:[true,"Price required"],min:[1,"Price must be atleast 1, no cheap sh*t"]},
    description:{type:String,required:[true,"description required"],minlength:[5,"description atleast 5 chars!"]}
}, {timestamps:true})

//the model - this is what we use to make the actual query to the DB!

const Product = mongoose.model("Product",ProductsSchema);

//export the model
module.exports=Product;