function checkPossibility(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1] || nums[i - 1] <= nums[i + 1]) {  
      continue;
    } else {
      count++;
    }
    if (count > 1) return false;
  }
  return true;
}

console.log(checkPossibility([4,2,1]));
