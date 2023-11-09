const express = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = express.Router();

// Get All Users
usersRouter.get("/", usersController.getAllUsers);

// Get Single User by ID
usersRouter.get("/:id", usersController.getUserById);

// Create a New User
usersRouter.post("/", usersController.createUser);

// Update User by ID
usersRouter.put("/:id", usersController.updateUser);

// Delete User by ID
usersRouter.delete("/:id", usersController.deleteUser);

module.exports = usersRouter;
