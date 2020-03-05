// メモ化でそれぞれのindex時の合計を取得しておく配列を用意
// mapを定義するよりもsums[]の配列で持った方がspaceを取らず、hash化しないので早い
var NumArray = function(nums) {
  this.sums = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    this.sums.push((sum += nums[i]));
  }
};

NumArray.prototype.sumRange = function(i, j) {
  return i === 0 ? this.sums[j] : this.sums[j] - this.sums[i - 1];
};

// class version
class NumArray {
  constructor(nums) {
    this.sums = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      this.sums.push((sum += nums[i]));
    }
  }
  sumRange = (i, j) => {
    return i === 0 ? this.sums[j] : this.sums[j] - this.sums[i - 1];
  };
}
