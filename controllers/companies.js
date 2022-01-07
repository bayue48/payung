const model = require("../models/");
const employee = model.employees;
const company = model.companies;
const status = require("../helpers/statusCode");
const validation = require("../helpers/validation");
const schema = validation.schema;
const object = validation.object;
const value = validation.value;

const getAll = async (_, res) => {
  try {
    const data = await company.findAll();
    res.status(status.code.success).json(status.success(data));
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

const addCompany = async (req, res) => {
  const { error } = schema.validate(req.body);

  try {
    if (!error) {
      const data = await company.create(req.body);
      res.status(status.code.created).json(status.success(data));
    } else {
      let err = error.details[0].message.replace(/\"/g, "");
      res.status(status.code.bad).json(status.errorCustom(err));
    }
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

const setActive = async (req, res) => {
  try {
    const data = await company.findOne({ where: { id: req.params.id } });

    if (!data) {
      res
        .status(status.code.unprocessable)
        .json(status.errorCustom("Company not found"));
    } else if (data.is_active === true) {
      res
        .status(status.code.bad)
        .json(status.errorCustom("Company is already active"));
    }
    update = await company.update(
      { is_active: true },
      { where: { id: req.params.id } }
    );
    res
      .status(status.code.success)
      .json(status.successCustom({ id: req.params.id, is_active: true }));
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const data = await company.findAll({
      include: {
        model: employee,
        as: "employees",
      },
      where: { id: req.params.id },
    });
    res.status(status.code.success).json(status.success(data));
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

const addEmployee = async (req, res) => {
  let body = {
    name: req.body.name,
    email: req.body.email,
    Phone_number: req.body.phone_number,
    jobtitle: req.body.jobtitle,
  };
  const { error } = object.validate(body);
  const newBody = { ...body, company_id: req.params.company_id };

  try {
    if (req.body === undefined || req.body === null) {
      res.status(status.code.bad).json(status.errorCustom("body is empty"));
    } else if (!error) {
      const data = await employee.create(newBody);
      res.status(status.code.created).json(status.success(data));
    } else {
      let err = error.details[0].message.replace(/\"/g, "");
      res.status(status.code.bad).json(status.errorCustom(err));
    }
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

const updateEmployee = async (req, res) => {
  let body = req.body;
  const { error } = value.validate(body);

  try {
    const data = await employee.findOne({
      where: { id: req.params.employee_id, company_id: req.params.company_id },
    });

    if (data === null) {
      res
        .status(status.code.unprocessable)
        .json(status.errorCustom("Employee not found"));
    } else if (!error) {
      up = await employee.update(body, {
        where: { id: req.params.employee_id },
      });
      const result = {
        id: req.params.employee_id,
        ...body,
        company_id: req.params.company_id,
      };
      res.status(status.code.created).json(status.success(result));
    } else {
      let err = error.details[0].message.replace(/\"/g, "");
      res.status(status.code.bad).json(status.errorCustom(err));
    }
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

module.exports = {
  getAll,
  addCompany,
  setActive,
  getAllEmployees,
  addEmployee,
  updateEmployee,
};
