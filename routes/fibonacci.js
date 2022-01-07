const fibonacciRouter = require("express").Router();

const fibonacciController = require("../controllers/fibonacci");

fibonacciRouter.post("/", fibonacciController.fibonacci);

module.exports = fibonacciRouter;
