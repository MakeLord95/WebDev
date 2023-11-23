// controllers/authController.js
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const config = require("../config");

// Function to handle user login
async function login(req, res) {
  const { username, password } = req.body;
  const user = UserModel.findByUsernameAndPassword(username, password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, config.secretKey, {
    expiresIn: "30min",
  });

  res.json({ token });
}

// Protected function to get all users
function getUsers(req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, config.secretKey);

    const users = UserModel.getUsers();

    console.log(jwt.verify(token, config.secretKey));

    res.json(users);
  } catch (err) {
    console.log(req.headers.authorization);

    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = { getUsers, login };
