function square(value) {
  return value * value;
}

function cube(value) {
  return value * value * value;
}

function power(value, exponent) {
  return Math.pow(value, exponent);
}

/**
 * exports is the nested object of the module object exports will reference / point to module object.
 * That's why when we use to export the module, it can either be used module.exports or only exports both are same.
 */
// const send = module.exports;
exports = {
  square,
  cube,
  power,
};

console.log(module);
// exports.square = square;
// exports.cube = cube;
// exports.power = power;

// module.exports = {
//   square,
//   cube,
//   power,
// };
// console.log(module.exports);

// console.log(module.exports === exports);
