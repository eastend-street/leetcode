// Time limit exceeded

/**
 * @param {number} k
 * @param {number[]} nums
 */
function KthLargest(k, nums) {
  this.array = nums;
  this.k = k;
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.array.push(val);
  return this.array.sort((a, b) => (a < b ? 1 : -1))[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
