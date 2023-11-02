const express = require("express");
const app = express();
const port = 3001;

const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, Express with Logging!");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
