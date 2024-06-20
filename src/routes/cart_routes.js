//CartRoutes declaration
const CartRoutes = require('express').Router();
const CartController = require('../controllers/cart_controller');

// below ki dono lines ko module.exports me dal diya
//CartRoutes me value daal rhe here
CartRoutes.post("/addTOCart",CartController.addToCart);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye
CartRoutes.delete("/removeFromCart",CartController.removeFromCart);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye
CartRoutes.get("/getCartByUserId/:userId",CartController.getCartByUserId);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye

//CartRoutes export kiya here
module.exports = CartRoutes;