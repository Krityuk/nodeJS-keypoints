const UserRoutes = require("express").Router();
const UserController = require("../controllers/user_controller");

UserRoutes.post("/createAccount", UserController.createAccount); // http://localhost:3000/api/user/createAcount ab likhe to ye wala chalna chahiye
UserRoutes.post("/signIn", UserController.signIn); // http://localhost:3000/api/user/sighIn ab likhe to ye wala chalna chahiye

module.exports = UserRoutes;// now any file can use UserRoutes