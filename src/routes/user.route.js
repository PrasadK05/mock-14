require("dotenv").config();
const express = require("express");
const {
  createUser, 
} = require("../controllers/user.controllers");
const User = require("../models/user.model");
const otpGenerator = require("otp-generator");



const app = express.Router();

app.post("/signup", async (req, res) => {
  let { name, score, difficulty } = req.body;

  let user = await createUser({ name, score, difficulty });

  if (user) {
    return res.send({ status: true, messege: "user created successfully" });
  } else {
    return res.send({ status: false, messege: "wrong details" });
  }
});

app.get("/all-user", async (req, res) => {
  let user = await User.find();
  if (user) {
    return res.send({ status: true, data: user });
  } else {
    return res.send({ status: false, messege: "wrong details" });
  }
});

app.get("/random-word", async (req, res) => {
  let word = otpGenerator.generate(6, {
    upperCaseAlphabets: true,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
  return res.send({ word });
});

app.patch("/update-user", async (req, res) => {
  let { id, score } = req.body;
  let user = await User.findOneAndUpdate({ _id: id }, { score });
  if (user) {
    return res.send({ status: true, messege: "score updated successfully" });
  } else {
    return res.send({ status: false, messege: "wrong details" });
  }
});

module.exports = app;
