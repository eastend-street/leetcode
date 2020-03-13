// sortして、2個ずる飛ばしてチェック
const singleNumber = nums => {
  nums.sort((a, b) => (a < b ? -1 : 1));
  for (let i = 0; i < nums.length; i+=2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

// Input: [2,2,1]
// Output: 1

console.log(singleNumber([2, 2, 1]));
