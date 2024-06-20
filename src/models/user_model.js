const {Schema,model}=require('mongoose');

const userSchema =new Schema({
    id:{type : String, unique : true}, // run npm install uuid and import uuid package here
    fullname: { type:String, default:"" },
    email: {type:String,unique:true,required:true},
    password: {type:String, required:true},
    phoneNumber:{type:String, default:""},
    address:{type:String, default:""},
    city:{type:String, default:""},
    state:{type:String, default:""},
    profileProgress:{type:Number, default:0}, // 0 means account created, (1 means address also entered either account completely created)
    updatedOn:{type:Date},
    createdOn:{type:Date},
});

// har userSchema model ka object bnne se pehle ye pre func chalega, userSchema.pre me save hone se pehle this.id=uuid.v1();etc ho jaega
const uuid= require('uuid');
const bcrypt= require('bcrypt');//to encrypt the password
userSchema.pre('save',function(next){
    this.id=uuid.v1();
    this.updatedOn=new Date();//this returns current date
    this.createdOn=new Date();

    //HASH THE PASSWORD HERE
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password,salt);
    this.password=hash;

    next();//next() represents pre function ends here

});

userSchema.pre('update',function(next){
    const update=this.getUpdate();
    delete update._id;
    delete update.id;//id and _id would never be got updated during updating

    this.updatedOn=new Date();
    next();
});

// NOW MAKE A MODEL USING THIS SCHEMA
const UserModel =model("User",userSchema);//'User' is the ref now to be used in other models
// perhaps above "user" is the collection name for database, collectionname is associated to model may be,
module.exports=UserModel;//by module.export we can export/access this UserModel from any file