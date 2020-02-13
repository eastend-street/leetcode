// accepted
const checkPossibility = nums => {
  if (nums.length <= 2) return true;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if ((nums[i - 2] || 0) <= nums[i]) nums[i - 1] = nums[i];
      else nums[i] = nums[i - 1];
      count++;
    }
    if (count > 1) return false;
  }
  return true;
};

console.log(checkPossibility([3, 4, 2, 3])); // true

// [3, 4, 2, 3] false
// [-1,4,2,3] true

// 解法
// 書き換えるときに２つ前を見て、その値より大きかったら、前の値を書き換える
// 書き換えるときに２つ前を見て、その値より小さかったら、今の値を書き換える
