function sum(...nums) {
  //   return nums.reduce((acc, curr) => acc + curr, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

module.exports = sum;
