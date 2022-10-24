const User = require("../models/users.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//user register
const RegisterUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const createdUser = {
      name,
      email,
      phoneNumber,
      password,
    };

    const newuser = new User(createdUser);
    await newuser.save();
    const token = await newuser.generateAuthToken();
    res
      .status(201)
      .send({ status: "User Created", user: newuser, token: token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ error: error.message });
  }
};

//login
const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User_s = await User.findByCredentials(email, password);
    const token = await User_s.generateAuthToken();
    res.status(200).send({ token: token, User_s: User_s });
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  RegisterUser,
  LoginUser,

};
