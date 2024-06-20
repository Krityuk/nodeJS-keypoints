const { Schema, model } = require("mongoose");

const cartItemsSchema = new Schema({
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    quantity:{type:Number, default: 1}
});

const cartSchema = new Schema({
  userId: {type: Schema.Types.ObjectId,ref:'User',required:true},
  items: {type:[cartItemsSchema], default:[]},//yaha cartSchema ke andar bhi ek schema daal diya isliye ek aur _id generate ho rhi thi items me
  updatedOn: { type: Date },
  createdOn: { type: Date },
});

cartSchema.pre("save", function (next) {
  this.createdOn = new Date();
  this.updatedOn = new Date();

  next(); //next() represents pre function ends here
});

cartSchema.pre("update", function (next) {
  const update = this.getUpdate();
  delete update._id;

  this.updatedOn = new Date();
  next();
});

// NOW MAKE A MODEL USING THIS SCHEMA
const CartModel = model("Cart", cartSchema);//"Category" is model ka name here and would be used to refer it in productSchema

module.exports = CartModel; //by module.export we can export/access this CartModel from any file now
