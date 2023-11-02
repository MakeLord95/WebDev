const pets = [];

let nextPetId = 1;

function getNewPetId() {
  const newPetId = nextPetId;
  nextPetId++;
  return newPetId;
}

// Handlers

// POST /pets
const createPet = (req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const age = req.body.age;
  const color = req.body.color;
  const weight = req.body.weight;

  const newPet = {
    petID: getNewPetId(),
    name,
    species,
    age,
    color,
    weight,
  };

  pets.push(newPet);
  res.json(newPet);
};

// GET /pets
const getAllPets = (req, res) => {
  console.log(pets);
  res.json(pets);
};

// GET /pets/:petID
const getPetById = (req, res) => {
  const petID = Number(req.params.petID);
  const foundPet = pets.find((pet) => pet.petID === petID);
  res.json(foundPet);
};

// PUT /pets/:petID
const updatePet = (req, res) => {
  const petID = Number(req.params.petID);
  const foundPet = pets.find((pet) => pet.petID === petID);

  foundPet.name = req.body.name;
  foundPet.species = req.body.species;
  foundPet.age = req.body.age;
  foundPet.color = req.body.color;
  foundPet.weight = req.body.weight;
  res.json(foundPet);
};

// DELETE /pets/:petID
const deletePet = (req, res) => {
  const petID = Number(req.params.petID);
  const petIdx = pets.findIndex((pet) => pet.petID === petID);
  console.log("petIdx", petIdx);

  if (petIdx === -1) {
    res.json({ message: "Pet not found" });
  } else {
    pets.splice(petIdx, 1);
    res.json({ message: "Pet deleted" });
  }
};

module.exports = {
  createPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet,
};
