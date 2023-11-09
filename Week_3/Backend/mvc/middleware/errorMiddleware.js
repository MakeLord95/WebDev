const unknownEndpoint = (request, response) => {
  response.status(404).sebd({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
};
