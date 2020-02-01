function rob(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let total = nums[i];
    for (let j = i + 2; j < nums.length; j++) {
      total += nums[j];
    }
    if (result < total) result = total;
  }
  return result;
}

console.log(rob([2,7,9,3,1]));
