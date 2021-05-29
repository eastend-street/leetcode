function rob(nums) {
  let result = 0;

  const array = nums.slice();
  array.sort((a, b) => a - b);

  for (let i = 0; i < Math.round(array.length); i++) {
    let total = 0;
    const num = array[array.length - 1];
    const index = nums.indexOf(num)
    if (num != nums[index + 1] && nums) {
      total += num;
    }
    array.pop();
  }
  // console.log(total)

  return result;
}

console.log(rob([2, 7, 9, 3, 1]));
