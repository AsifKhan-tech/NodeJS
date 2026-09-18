function square(value) {
  return value * value;
}

function cube(value) {
  return value * value * value;
}

function power(value, exponent) {
  return Math.pow(value, exponent);
}

module.exports.square = square;
module.exports.cube = cube;
module.exports.power = power;

// module.exports = {
//   square,
//   cube,
//   power,
// };
// console.log(module.exports);
