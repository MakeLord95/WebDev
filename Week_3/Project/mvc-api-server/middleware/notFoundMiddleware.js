const notFoundMiddleware = (req, res, next) => {
  res.status(404).send({ error: "unknown endpoint" });
};

module.exports = notFoundMiddleware;
