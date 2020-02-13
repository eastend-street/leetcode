/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let result = 0;
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      const prevVal = hashMap.get(nums[i]);
      hashMap.set(nums[i], prevVal + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
  }

  for (let key of hashMap.keys()) {
    if (hashMap.has(key + 1)) {
      result = Math.max(result, hashMap.get(key) + hashMap.get(key + 1));
    }
  }
  return result;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
