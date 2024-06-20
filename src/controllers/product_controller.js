const ProductModel = require("../models/product_model");


const ProductController= {

    createProduct:async function(req,res){
    try {
        const productData =  req.body;
        const newProduct = new ProductModel(productData);
        await newProduct.save();
        return res.json({ success:true, msg: "Product Created Successfully",data:newProduct});

    } catch (error) {
        return res.json({ success:false, msg: `error => ${error}`})
    }
    },

    fetchAllProduct: async function(req,res){
        try {
            const products = await ProductModel.find();

            return res.json({ success:true, msg: "Product Fetched Successfully",data:products});

        } catch (error) {
            return res.json({ success:false, msg: `error => ${error}`})
        }

    },
    fetchCategoryByCategory: async function(req,res){
        try {
            const categoryId =req.params.id;

            const products = await ProductModel.find({category: categoryId});

            return res.json({ success:true, msg: "Product Fetched Successfully",data:products});

        } catch (error) {
            return res.json({ success:false, msg: `error => ${error}`})
        }

    },

};

module.exports = ProductController;