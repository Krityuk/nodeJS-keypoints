//ProductRoutes declaration
const ProductRoutes = require('express').Router();
const ProductController = require('../controllers/product_controller');

// below ki dono lines ko module.exports me dal diya
//ProductRoutes me value daal rhe here
ProductRoutes.post("/createProduct",ProductController.createProduct);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye
ProductRoutes.get("/fetchAllProducts",ProductController.fetchAllProduct);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye
ProductRoutes.get("/fetchProductsByCategory/:id",ProductController.fetchCategoryByCategory);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye

//ProductRoutes export kiya here
module.exports = ProductRoutes;