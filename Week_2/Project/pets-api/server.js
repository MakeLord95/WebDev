const express = require("express");
const app = express();
const port = 3001;

const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("./petHandler");

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ROUTES

// GET /pets
app.get("/pets", getAllPets);

// POST /pets
app.post("/pets", createPet);

// GET /pets/:petID
app.get("/pets/:petID", getPetById);

// PUT /pets/:petID
app.put("/pets/:petID", updatePet);

// DELETE /pets/:petID
app.delete("/pets/:petID", deletePet);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
