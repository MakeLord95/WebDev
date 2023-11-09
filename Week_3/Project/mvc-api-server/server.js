const express = require("express");
const errorMiddleware = require("./middleware/errorMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");

const app = express();

app.use(express.json());

app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/services", require("./routes/servicesRoutes"));
app.use("/api/tours", require("./routes/toursRoutes"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(notFoundMiddleware);
app.use(errorMiddleware);