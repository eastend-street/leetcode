/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k){
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i]) && i - hash.get(nums[i]) <= k) {
      return true;
    }
    hash.set(nums[i], i);
  }
  return false;
};