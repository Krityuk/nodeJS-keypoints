const CategoryModel =require('../models/category_model');

const CategoryController = {

    createCategory: async function(req,res){
        try {
            const categoryData= req.body;//req.body is the json that we manually wrote in postman software
            const newCategory= new CategoryModel(categoryData);
            await newCategory.save();//save func call kr de rhe matlab database me save kr de

            return res.json({success:true,msg:"Category Created!",data:newCategory});

        } catch (error) {
            return res.json({success:false, msg:`error = ${error}`});
        }
    },
    fetchAllCategories: async function(req,res){
        try {
            const categories = await CategoryModel.find();// categories is a const list
            // console.log(categories);

            return res.json({success:true,msg:"Category Fetched",data:categories});

        } catch (error) {
            return res.json({success:false, msg:`error = ${error}`});
        }
    },
    fetchCategoryByUid: async function(req,res){
        try {
            const id =req.params.id;
            const foundCategory = await CategoryModel.findById(id);// categories is a const list

            if(!foundCategory)
            return res.json({success:false,msg:"Category not Found",});
            else
            return res.json({success:true,msg:"Category Found",data:foundCategory});

        } catch (error) {
            return res.json({success:false, msg:`error = ${error}`});
        }
    },
}

module.exports= CategoryController;