const combinationRouter = require("express").Router();

const combinationController = require("../controllers/combination");

combinationRouter.post("/", combinationController.combination);

module.exports = combinationRouter;
