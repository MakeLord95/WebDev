const express = require("express");
const app = express();
const port = 3001;

app.get("/text", (req, res) => {
  res.send("This is a simple text response.");
});

app.get("/json", (req, res) => {
  const jsonData = {
    message: "This is an updates JSON response",
    timestamp: new Date(),
  };

  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
