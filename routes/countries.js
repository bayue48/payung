const countriesRouter = require("express").Router();

const countriesController = require("../controllers/countries");

countriesRouter.get("/", countriesController.getAll);

module.exports = countriesRouter;
