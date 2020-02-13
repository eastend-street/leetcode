/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  // make hash
  let map = {};
  for (n of nums) {
    map[n] ? map[n]++ : (map[n] = 1);
  }

  // change hash to array to sort
  let array = [];
  for (n in map) {
    array.push({ n: n, count: map[n] });
  }

  // sort, cut array until k, return only key(not count)
  return array
    .sort((a, b) => b.count - a.count)
    .slice(0, k)
    .map(n => n.n);
}

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
