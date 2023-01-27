const User = require("../models/user.model");



const createUser = async (data) => {
  let { name, score, difficulty } = data;  
  let user = await User.create({ name, score, difficulty });
  if (user) {
    return true;
  } else {
    return false;
  }
};





module.exports = {
  createUser,
};
