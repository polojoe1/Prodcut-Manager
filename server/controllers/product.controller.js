//import the model

const { model } = require("mongoose");
const Product = require("../models/product.model");

//make ALL CRUD

// read all
module.exports.findAllProducts = (req, res) =>{
    //use model to execute query
    Product.find()
    .then(allProducts=>{
        res.json(allProducts)//[]
    })
    .catch(err=>{console.log("couldnt retrieve",err)})
}

module.exports.createProduct = (req,res)=>{
    Product.create(req.body)
    .then(newProduct=>res.json({product:newProduct}))
    .catch(err=>res.json({message:"something went wrong",error:err}))
}

module.exports.findOneProduct = (req,res)=>{
    Product.findById({ _id: req.params.id })
    .then(oneSingleProduct => res.json({ user: oneSingleProduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingProduct = (req,res)=>{
    Product.updateOne({ _id: req.params.id }, req.body,{ new: true, runValidators: true })
    .then(updatedProduct =>res.json({product: updatedProduct}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProductById = (req,res)=>{
    Product.deleteOne({ _id: req.params.id })
    .then(result=>res.json({result:result}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}