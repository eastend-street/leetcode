const containsDuplicate = nums => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

// Input: [1,2,3,1]
// Output: true

console.log(containsDuplicate([1, 2, 3, 1]));
