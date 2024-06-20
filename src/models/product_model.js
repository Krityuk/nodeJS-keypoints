const {Schema,model}=require('mongoose');

const productSchema =new Schema({
    category:{type:Schema.Types.ObjectId,ref:'Category',required:true}, //Schema.Types.ObjectId is just a datatype
    title:{type : String, required : [true,"title is required!"]}, //required:true bhi likh sakte hai
    description:{type: String,default:""},
    price:{type:String,required:true},
    images:{type:Array,default:[]},
    updatedOn:{type:Date},
    createdOn:{type:Date}
});

productSchema.pre('save',function(next){ //Here we jsut overriden the save function
    
    this.createdOn=new Date();
    this.updatedOn=new Date();
    
    next();//next() represents pre function ends here

});

productSchema.pre('update',function(next){
    const update=this.getUpdate();
    delete update._id;

    this.updatedOn=new Date();
    next();
});

// NOW MAKE A MODEL USING THIS SCHEMA
const ProductModel =model("Product",productSchema);

module.exports=ProductModel;//by module.export we can export/access this CategoryModel from any file now