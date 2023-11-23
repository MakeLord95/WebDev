// models/userModel.js
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
  { id: 3, username: "user3", password: "password3" },
  { id: 4, username: "user4", password: "password4" },
  { id: 5, username: "user5", password: "password5" },
];

// Function to find a user by username and password
function findByUsernameAndPassword(username, password) {
  return users.find(
    (user) => user.username === username && user.password === password
  );
}

function getUsers() {
  return users;
}

module.exports = { getUsers, findByUsernameAndPassword };
