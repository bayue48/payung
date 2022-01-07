const status = require("../helpers/statusCode");

function fib(n) {
  if (n == 0) {
    // if number is 0
    throw "err"; // throw error
  } else {
    let x = 0, // first number in the series
      y = 1, // second number in the series
      nextNum; // next number in the series
    let res = []; // declare array to store result

    for (let i = 1; i <= n; i++) {
      // loop to generate series
      res.push(x); // push first number in the array
      nextNum = x + y; // calculate next number in the series
      x = y; // assign y to x
      y = nextNum; // assign the nextNum into y
    }
    return res;
  }
}

const fibonacci = (req, res) => {
  const n = parseInt(req.body.n);
  try {
    if (req.body.n === undefined) {
      res.status(status.code.bad).json(status.errorCustom("n is required"));
    } else if (n != req.body.n) {
      res.status(status.code.bad).json(status.errorCustom("n must be number"));
    } else {
      const result = fib(n);
      res
        .status(status.code.success)
        .json(status.success(result.toString().replace(/,/g, " ")));
    }
  } catch (error) {
    res.status(status.code.bad).json(status.error(error));
  }
};

module.exports = { fibonacci };
