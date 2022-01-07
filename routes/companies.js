const companiesRouter = require("express").Router();

const companiesController = require("../controllers/companies");
const middlewares = require("../middlewares/email");

companiesRouter.get("/", companiesController.getAll);
companiesRouter.post("/", companiesController.addCompany);
companiesRouter.put("/:id/set_active", companiesController.setActive);
companiesRouter.get("/:id/employees", companiesController.getAllEmployees);
companiesRouter.post(
  "/:company_id/employees",
  middlewares.validate,
  companiesController.addEmployee
);
companiesRouter.put(
  "/:company_id/employees/:employee_id",
  middlewares.validate,
  companiesController.updateEmployee
);

module.exports = companiesRouter;
