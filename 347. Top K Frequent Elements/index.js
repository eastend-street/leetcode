/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  // それぞれの数の合計を出す
  //　多いものから順にk個取りだす
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);
  }

  let array = []
  for (let i = 0; i < k; i++) {
    console.log([map].map(num => num.value))
  }
  return array;
}

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
