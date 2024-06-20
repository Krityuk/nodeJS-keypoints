const CartModel =require('../models/cart_model');

const CartController = {

    addToCart: async function(req,res){
        try {
            const {product, userId, quantity } = req.body;
            //look for if a cart for this user already exists
            const foundCart = await CartModel.findOne({userId: userId});

            if(!foundCart)//if(user ki cart not exists)
            {
                const newCart = new CartModel({userId:userId});
                newCart.items.push({product: product,quantity:quantity});
                await newCart.save();
            return res.json({success:true, msg:"Successfully added 1st item", data:newCart});
            }
            else//when there was already a cart associated to that user and usme hm add to cart kr rhe
            {
                const updatedCart = await CartModel.findOneAndUpdate({userId:userId},{$push:{items:{product:product,quantity:quantity}}},//items me push kr rhe isliye items bhi ek schema ho gya, and uski bhi _id create ho rhi
                    {new:true}//{new:true} se do updating confirm hota hai, updating me ye {new:true} likhna hota hai
                    );
            return res.json({success:true, msg:"Successfully added next item", data:updatedCart});
        }
    //
    } catch (error) {
        return res.json({success:false, msg:`error = ${error}`});
        }
    },
    removeFromCart: async function(req,res){
        try {
            const {product, userId} = req.body;//all quantity of the product would get removed here ok. if bas ek do items incr decr krna ho to yaha updateTheCart naam ka ek aur fn bna sakte hai
            const updatedCart = await CartModel.findOneAndUpdate({userId:userId},{$pull:{ items: {product:product}}},{new:true});


            return res.json({success:true, msg:"Successfully removed this product(all quantity removed)", data:updatedCart});

        } catch (error) {
            return res.json({success:false, msg:`error = ${error}`});
        }
    },
    getCartByUserId: async function(req,res){
        try {
            const userId = req.params.userId;//req.params means the "/getCartByUserId/:userId" URL
            const foundCart = await CartModel.findOne({userId:userId});
            console.log(userId);
            if(!foundCart){
                return res.json({success:true, msg:"No cart found for this user"});

            }
            else
            return res.json({success:true, msg:"Cart found", data:foundCart.items});



        } catch (error) {
            return res.json({success:false, msg:`error = ${error}`});
        }
    },


}

module.exports= CartController;