const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let s = 0;
  for (const i of arr) {
    s += i;
  }
  return s;
};

const multiply = function (arr) {
  let s = 1;
  for (const i of arr) {
    s *= i;
  }
  return s;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let out = 1;
  for (let i = 1; i < n + 1; i++) {
    out *= i;
  }

  return out;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
