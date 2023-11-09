const services = require("../models/services");

// Get All Services
const getAllServices = (req, res) => {
  res.json(services);
};

// Get Single Service by ID
const getServiceById = (req, res) => {
  const found = services.some(
    (service) => service.id === parseInt(req.params.id)
  );

  if (found) {
    res.json(
      services.filter((service) => service.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

// Create a New Service
const createService = (req, res) => {
  const nextId = services[services.length - 1].id + 1;

  const newService = {
    id: nextId,
    ...req.body,
  };

  if (!newService.icon || !newService.title || !newService.text) {
    return res
      .status(400)
      .json({ msg: "Please include an icon, a title and some text" });
  }

  services.push(newService);
  res.json(services);
};

// Update Service by ID
const updateService = (req, res) => {
  const found = services.some(
    (service) => service.id === parseInt(req.params.id)
  );

  if (found) {
    services.forEach((service, i) => {
      if (service.id === parseInt(req.params.id)) {
        services[i] = { ...service, ...req.body };
        res.json({ msg: "Service updated", service: services[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

// Delete Service by ID
const deleteService = (req, res) => {
  const found = services.some(
    (service) => service.id === parseInt(req.params.id)
  );

  if (found) {
    const updatedServices = services.filter(
      (service) => service.id !== parseInt(req.params.id)
    );
    res.json({ msg: "service deleted", services: updatedServices });
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
