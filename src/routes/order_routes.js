//CartRoutes declaration
const OrderRoutes = require('express').Router();
const OrderController = require('../controllers/order_controller');

// below ki dono lines ko module.exports me dal diya
//OrderRoutes me value daal rhe here
OrderRoutes.post("/createOrder",OrderController.CreateOrder);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye

//CartRoutes export kiya here
module.exports = OrderRoutes;