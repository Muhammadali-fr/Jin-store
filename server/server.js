const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.route");

// const

connectDB();
const app = express();      

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to home back end");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app workin on ${PORT} port`);
});
