const Joi = require("joi");

const schema = Joi.object().keys({
  company_name: Joi.string().required().min(3).max(50),
  telephone_number: Joi.string().min(8).max(16),
  address: Joi.string().min(10).max(50),
});

const object = Joi.object().keys({
  name: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required().min(5).max(255),
  Phone_number: Joi.string().min(8).max(16),
  jobtitle: Joi.valid("manager", "director", "staff").required(),
});

const value = Joi.object().keys({
  name: Joi.string().min(2).max(50),
  email: Joi.string().email().min(5).max(255),
  Phone_number: Joi.string().min(8).max(16),
  jobtitle: Joi.valid("manager", "director", "staff"),
});

module.exports = { schema, object, value };
