const model = require("../models");
const status = require("../helpers/statusCode");
const employee = model.employees;

const validate = async (req, res, next) => {
  const { email } = req.body;
  try {
    if (!email) {
      res.status(status.code.bad).json(status.errorCustom("Email is required"));
    } else {
      const data = await employee.findOne({ where: { email } });
      if (data) {
        res
          .status(status.code.conflict)
          .json(status.errorCustom("email already exist"));
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

module.exports = { validate };
