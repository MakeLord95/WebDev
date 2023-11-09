const users = require("../models/users");

// Get All Users
const getAllUsers = (req, res) => {
  res.json(users);
};

// Get Single User by ID
const getUserById = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

// Create a New User
const createUser = (req, res) => {
  const nextId = users[users.length - 1].id + 1;

  const newUser = {
    id: nextId,
    ...req.body,
  };

  if (!newUser.username || !newUser.email || !newUser.role) {
    return res
      .status(400)
      .json({ msg: "Please include a name, email and role" });
  }

  users.push(newUser);
  res.json(users);
};

// Update User by ID
const updateUser = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    users.forEach((user, i) => {
      if (user.id === parseInt(req.params.id)) {
        users[i] = { ...user, ...req.body };
        res.json({ msg: "User updated", user: users[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

// Delete User by ID
const deleteUser = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const updatedUsers = users.filter(
      (user) => user.id !== parseInt(req.params.id)
    );
    res.json({ msg: "User deleted", users: updatedUsers });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
