const findDuplicate = nums => {
  for (const num of nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((right - left) / 2);
      if (mid === num) return num;
    }
  }
};

// Input: [1,3,4,2,2]
// Output: 2

console.log(findDuplicate([1, 3, 4, 2, 2]));

const findDuplicate = nums => {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (k - j >= 0) {
      if (nums[i] === nums[j] || nums[i] === nums[k]) {
        return nums[i];
      }
      j++;
      k--;
    }
  }
};
