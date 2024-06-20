// controller me functions bnte hai sirf, multiple func export hote hai

const UserModel = require("../models/user_model");
const bcrypt =require('bcrypt');

const UserController = {
    // SIGNUP KA CODE
    createAccount: async function(req,res){
        try {
            const userData =req.body;//req.body is the json that we manually wrote in postman software
            const newUser = new UserModel(userData);
            await newUser.save(); // .save() fn saves into mongoDB database
            return res.json({success:true,message:"User Created!",data:newUser});
        } catch (error) {
            return res.json({success:false,msg:`error = ${error}`});
        }
    },
    // SIGNIN KA CODE
    signIn: async function(req,res){
        try {
            const {email,password} = req.body;// raw data passed in postman, should have email and password.
            // const  userData= req.body;
            // const  userDataEmail= req.body.email;
            const foundUser =await UserModel.findOne({email: email});//"findOne() is a Mongoose package ka function" it searches for a single document in mongoDB database collection based on the specified criteria, and it returns the first document that matches the query.
            if(!foundUser)
            {
                return res.json({success: false, message:"This account not exists!"});
            }
            else{// case: when email found in mongoDB database "User", using findOne fn
                //COMPARE THAT ENTERED PASSWORD AND DecryptFormOF(foundUser ka password) same h ya nai
                const passwordsMatches = bcrypt.compareSync(password,foundUser.password);
                if(!passwordsMatches)
                {
                    return res.json({success: false, message:"Incorrect Password!"});
                }
                else
                {
                    return res.json({success: true, message:"SignIn Successful", data: foundUser});
                }

            }
        } catch (error) {
            return res.json({success:false,msg:`error = ${error}`});
        }
    }
}

module.exports=UserController; //exporting the module for use in other files
