// unresolved

const lengthOfLIS = nums => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j - 1] < nums[j]) {
        console.log(nums[j]);
        count++;
        sum = Math.max(sum, count);
      } else break;
    }
  }
  return sum;
};

// Input: [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
