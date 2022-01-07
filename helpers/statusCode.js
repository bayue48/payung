const success = (m) => ({
  code: "01",
  status: true,
  message: "Success",
  data: m,
});

const successCustom = (m) => ({
  code: "1",
  status: true,
  message: "Success",
  data: m,
});

const error = (m) => ({
  code: "02",
  status: false,
  message: "Error",
  data: m,
});

const errorCustom = (m) => ({
  code: "02",
  status: false,
  message: m,
  data: null,
});

const code = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204,
  forbidden: 403,
  unprocessable: 422,
  nocontent: 204,
};

module.exports = { success, successCustom, error, errorCustom, code };
