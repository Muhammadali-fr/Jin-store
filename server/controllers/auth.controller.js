const User = require("../models/user.model");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

router.use(express.json());
router.use(cookie());

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ message: "email already taken." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

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

    res.status(200).json({ user, message: "user yaratildi" });
  } catch (error) {
    res.status(500).json({ error, message: "...hato register" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ massage: "user topilmadi login vaqtida." });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: "... password hato" });

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({ message: "login uraaaaa" });
  } catch (error) {
    res.status(500).json({ error, message: "...xato loginda" });
  }
};

module.exports = { register, login };
