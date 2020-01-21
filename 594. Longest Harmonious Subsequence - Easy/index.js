/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  if(nums.length >= 20000) return    

  let result = 0;
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    const min = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (min === nums[j] || min + 1 === nums[j]) {
        temp.push(nums[j]);
        // console.log(min, nums[j], temp.length);
      }
    }
    if (result < temp.length && temp.includes(min + 1)) {
      result = temp.length;
    }
    temp = [];
  }
  return result;
};

console.log(findLHS([1,1,1,1]));

// 総当たりでは時間がかかる → 答えは配列を作らなくていい → 辞書を使ってカウントだけ出す
// 総当たりでは時間がかかる → 答えは配列を作らなくていい → ソートを