const model = require("../models");
const status = require("../helpers/statusCode");
const employee = model.employees;

const getEmployees = async (req, res) => {
  try {
    const data = await employee.findOne({ where: { id: req.params.id } });
    res.status(status.code.success).json(status.success(data));
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

const deleteEmployees = async (req, res) => {
  try {
    const data = await employee.delete({ where: { id: req.params.id } });
    res.status(status.code.success).json(status.success(data));
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

module.exports = { getEmployees, deleteEmployees };
