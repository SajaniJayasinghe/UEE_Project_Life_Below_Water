const User = require("../models/users.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
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
    res.status(201).send({ status: "User Created", user: newuser, token: token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  RegisterUser,
};
