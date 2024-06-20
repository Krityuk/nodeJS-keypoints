const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  title: { type: String, required: [true, "title is required!"] },
  description: { type: String, default: "" },
  updatedOn: { type: Date },
  createdOn: { type: Date },
});

categorySchema.pre("save", function (next) {
  this.createdOn = new Date();
  this.updatedOn = new Date();

  next(); //next() represents pre function ends here
});

categorySchema.pre("update", function (next) {
  const update = this.getUpdate();
  delete update._id;

  this.updatedOn = new Date();
  next();
});

// NOW MAKE A MODEL USING THIS SCHEMA
const CategoryModel = model("Category", categorySchema);//"Category" is model ka name here and would be used to refer it in productSchema

module.exports = CategoryModel; //by module.export we can export/access this CategoryModel from any file now
