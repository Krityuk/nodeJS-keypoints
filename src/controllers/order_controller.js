const OrderModel =require('../models/order_model');

const OrderController = {

    CreateOrder: async function(req,res){
        try {
            const {userId,items,} = req.body;
            const newOrder = new OrderModel({userId:userId,items:items});
            await newOrder.save();

            return res.json({success:true, msg:"Successfully Order Created", data:newOrder});

    } catch (error) {
        return res.json({success:false, msg:`error = ${error}`});
        }
    },


}

module.exports= OrderController;