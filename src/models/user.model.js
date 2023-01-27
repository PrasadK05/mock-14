const mongoose = require("mongoose");

let users = new mongoose.Schema({
  name: { type: String, required: true }, 
  score: { type: String, default:0 },
  difficulty: { type: String, enum: ["low", "medium", "high"], default: "low" }
  
});

let User = mongoose.model("user", users);

module.exports = User;
