const tours = require("../models/tours");

// Get All Tours
const getAllTours = (req, res) => {
  res.json(tours);
};

// Get Single tour by ID
const getTourById = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    res.json(tours.filter((tour) => tour.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

// Create a New tour
const createTour = (req, res) => {
  const nextId = tours[tours.length - 1].id + 1;

  const newTour = {
    id: nextId,
    ...req.body,
  };

  if (
    !newTour.image ||
    !newTour.date ||
    !newTour.title ||
    !newTour.info ||
    !newTour.location ||
    !newTour.duration ||
    !newTour.cost
  ) {
    return res.status(400).json({
      msg: "Please include tour image, date, title, info, location duration and cost.",
    });
  }

  tours.push(newTour);
  res.json(tours);
};

// Update tour by ID
const updateTour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    tours.forEach((tour, i) => {
      if (tour.id === parseInt(req.params.id)) {
        tours[i] = { ...tour, ...req.body };
        res.json({ msg: "Tour updated", tour: tours[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

// Delete tour by ID
const deleteTour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    const updatedTours = tours.filter(
      (tour) => tour.id !== parseInt(req.params.id)
    );
    res.json({ msg: "tour deleted", tours: updatedTours });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
