const express = require("express");
const servicesController = require("../controllers/servicesController");
const servicesRouter = express.Router();
const checkRole = require("../middleware/rolesMiddleware").checkRole;

// Get All Services
servicesRouter.get("/", servicesController.getAllServices);

// Get Single Service by ID
servicesRouter.get("/:id", servicesController.getServiceById);

// Create a New Service
servicesRouter.post("/", checkRole("admin"), servicesController.createService);

// Update Service by ID
servicesRouter.put(
  "/:id",
  checkRole("admin"),
  servicesController.updateService
);

// Delete Service by ID
servicesRouter.delete(
  "/:id",
  checkRole("admin"),
  servicesController.deleteService
);

module.exports = servicesRouter;
