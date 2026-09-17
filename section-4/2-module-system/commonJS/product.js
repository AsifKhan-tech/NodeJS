function product(...nums) {
  //   return nums.reduce((acc, curr) => acc * curr, 1);
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    product = product * nums[i];
  }
  return product;
}

module.exports = product;
