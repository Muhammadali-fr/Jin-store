const User = require("../models/user.model");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

router.use(express.json());
router.use(cookie());

const register = async (req, res) => {
  try {
    const password = req.body.password;
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ message: "Email already taken." });

    if (password.length < 6)
      return res
        .status(401)
        .json({ message: "Password must be at least 6 characters." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({ user, message: "Sign up successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Some thing went wrong while signing up." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ massage: "Email isn't found." });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Check the password." });

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({ message: "Login successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Something went wrong while login in." });
  }
};

module.exports = { register, login };
