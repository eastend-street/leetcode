const containsDuplicate = nums => {
  nums.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

// Input: [1,2,3,1]
// Output: true

console.log(containsDuplicate([1, 2, 3, 1]));
