const express = require("express");
const app = express();
const port = 3001;

app.get("/endpoint1", (req, res) => {
  res.send("This is the first endpoint.");
});

app.get("/endpoint2", (req, res) => {
  res.send("This is the second endpoint.");
});

const notFoundCb = (req, res) => {
  res.status(404).send("Sorry, the requested page counldn't be found.");
};

app.use(notFoundCb);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
