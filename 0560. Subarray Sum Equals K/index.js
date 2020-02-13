function subarraySum(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) count++;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + nums[i + 1] === k) count++;
    }
  }
  return count;
}

// Input:nums = [1,1,1], k = 2
// Output: 2

// [1,2,1,2,1] k=3
// expected:4

// [1,2,3] k=3
// expected: 2

console.log(subarraySum([1, 2, 1, 2, 1], 3));
