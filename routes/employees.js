const employeesRouter = require("express").Router();

const employeesController = require("../controllers/employees");

employeesRouter.get("/:id", employeesController.getEmployees);
employeesRouter.delete("/:id", employeesController.deleteEmployees)

module.exports = employeesRouter;
