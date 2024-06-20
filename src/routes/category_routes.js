const CategoryRoutes = require('express').Router();
const CategoryController = require('../controllers/category_controller');

CategoryRoutes.post("/createCategory",CategoryController.createCategory);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye
CategoryRoutes.get("/fetchAllCategories",CategoryController.fetchAllCategories);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye
CategoryRoutes.get("/fetchCategoryByUid/:id",CategoryController.fetchCategoryByUid);// http://localhost:3000/createAcount ab likhe to ye wala chalna chahiye

module.exports = CategoryRoutes;