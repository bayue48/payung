const express = require("express");
const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const companiesRouter = require("./companies");
const employeesRouter = require("./employees");
const countriesRouter = require("./countries");
const combinationRouter = require("./combination");
const fibonacciRouter = require("./fibonacci");

mainRouter.use("/", welcomeRouter);
mainRouter.use("/companies", companiesRouter); // localhost:8000/api/companies
mainRouter.use("/employees", employeesRouter); // localhost:8000/api/employees
mainRouter.use("/countries", countriesRouter); // localhost:8000/api/countries
mainRouter.use("/combination", combinationRouter); // localhost:8000/api/combination
mainRouter.use("/fibonacci", fibonacciRouter); // localhost:8000/api/fibonacci

module.exports = mainRouter;
