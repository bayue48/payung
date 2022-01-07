function factorial(n) {
  let answer = 1; // first number in the series
  if (n == 0 || n == 1) {
    // if number is 0 or 1
    return answer; // return 1
  } else {
    for (var i = n; i >= 1; i--) {
      // loop to generate series
      answer = answer * i; // calculate next number in the series
    }
    return answer;
  }
}
console.log("14", factorial(5));

console.log("16", factorial(5) / (factorial(2) * factorial(5 - 2)));

function fibonacci(n) {
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

fibonacci(5);

function fac(n) {
  let answer = 1; // first number in the series

  if (n == 0 || n == 1 || r == 0 || r == 1) {
    // if number is 0 or 1
    return answer; // return 1
  } else {
    for (let i = n; i >= 1; i--) {
      // loop to generate series
      answer = answer * i; // calculate next number in the series
      console.log("47", answer);
    }
    return answer;
  }
}

fac(5);
