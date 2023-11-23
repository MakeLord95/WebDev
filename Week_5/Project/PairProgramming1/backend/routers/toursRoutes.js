const express = require("express");
const tourController = require("../controllers/toursController");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();

// Get all tours
router.get("/", tourController.getTours);

// Get a single tour by ID
router.get("/:id", tourController.getTour);

// Create a new tour
router.post("/", tourController.postTour);

// Update a tour by ID
router.put("/:id", tourController.putTour);

// Delete a tour by ID
router.delete("/:id", tourController.deleteTour);
router.patch("/:id", tourController.patchTour);

module.exports = router;
