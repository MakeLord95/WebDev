const express = require("express");
const toursController = require("../controllers/toursController");
const toursRouter = express.Router();

// Get All Tours
toursRouter.get("/", toursController.getAllTours);

// Get Single Tour by ID
toursRouter.get("/:id", toursController.getTourById);

// Create a New Tour
toursRouter.post("/", toursController.createTour);

// Update Tour by ID
toursRouter.put("/:id", toursController.updateTour);

// Delete Tour by ID
toursRouter.delete("/:id", toursController.deleteTour);

module.exports = toursRouter;
