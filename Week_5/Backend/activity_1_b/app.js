const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
app.use(express.json());

const users = [
  { username: "john", password: "password123admin" },
  { username: "admin", password: "admin123admin" },
];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if username exists in the database
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User created successfully" });
});

app.get("/users", (req, res) => {
  const userInformation = users.map((user) => {
    return {
      username: user.username,
      password: user.password,
    };
  });
  res.status(200).json({ users: userInformation });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check if username exists in the database
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Username does not exist" });
  }

  // Check if password is correct
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid password" });
  }

  res.status(200).json({ message: "Login successful" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
