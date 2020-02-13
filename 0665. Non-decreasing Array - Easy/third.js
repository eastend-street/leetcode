function checkPossibility(nums) {
  let count = 0;
  if (nums.length <= 2) return true;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1] && nums[i] <= nums[i + 2]) {
      continue;
    } else {
      count++;
    }
    if (count > 1) return false;
  }
  return true;
}

console.log(checkPossibility([4, 2, 3]));
