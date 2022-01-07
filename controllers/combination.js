const status = require("../helpers/statusCode");

function factorial(n) {
  let res = 1; // first number in the series
  if (n == 0 || n == 1) {
    // if number is 0 or 1
    return n; // return n
  } else {
    for (let i = n; i >= 1; i--) {
      // loop to generate series
      res = res * i; // calculate next number in the series
    }
    return res; // return the res
  }
}

const combination = async (req, res) => {
  const n = parseInt(req.body.n);
  const r = parseInt(req.body.r);

  try {
    if (req.body.n === undefined || req.body.r === undefined) {
      res
        .status(status.code.bad)
        .json(status.errorCustom("n or r is required"));
    } else if (n != req.body.n || r != req.body.r) {
      res
        .status(status.code.bad)
        .json(status.errorCustom("n or r must be number"));
    } else if (n < 1 || r < 1) {
      res
        .status(status.code.bad)
        .json(status.errorCustom("n and r must be greater than 0"));
    } else if (n === r) {
      // infinite
      res
        .status(status.code.bad)
        .json(status.errorCustom("n and r must be different"));
    } else {
      const result = factorial(n) / (factorial(r) * factorial(n - r));
      res.status(status.code.success).json(status.success(result));
    }
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

module.exports = { combination };
