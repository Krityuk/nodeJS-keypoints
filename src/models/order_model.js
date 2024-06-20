        // OrderModel is just the cart model itself, bas cartModel input ke liye hai and orderModel output hai cart ka
//i.e.. and input ke liye type: Schema.Types.ObjectId use kiya tha, output ke liye map usekr rha as it should be static

const { Schema, model } = require("mongoose");

const orderItemsSchema = new Schema({
    product: {type: Map, required:true},
    quantity:{type:Number, default: 1}
});

const orderSchema = new Schema({
  userId: {type: Map,required:true},
  items: {type:[orderItemsSchema], default:[]},//yaha cartSchema ke andar bhi ek schema daal diya isliye ek aur _id generate ho rhi thi items me
  status:{ type:String,default:"Order-Placed"},
  updatedOn: { type: Date },
  createdOn: { type: Date },
});

orderSchema.pre("save", function (next) {
  this.createdOn = new Date();
  this.updatedOn = new Date();

  next(); //next() represents pre function ends here
});

orderSchema.pre("update", function (next) {
  const update = this.getUpdate();
  delete update._id;

  this.updatedOn = new Date();
  next();
});

// NOW MAKE A MODEL USING THIS SCHEMA
const OrderModel = model("Order", orderSchema);//"Category" is model ka name here and would be used to refer it in productSchema

module.exports = OrderModel; //by module.export we can export/access this CartModel from any file now
