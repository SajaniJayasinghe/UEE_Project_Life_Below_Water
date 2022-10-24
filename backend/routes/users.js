const express = require("express");
const UserRouter = express.Router();
const userauth = require("../middlewear/userauth.middlewear");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { 
    RegisterUser,
    LoginUser,
 } = require("../controllers/user.controller");

UserRouter.post("/registeruser", RegisterUser);
UserRouter.post("/loginuser",LoginUser);


module.exports = UserRouter;
