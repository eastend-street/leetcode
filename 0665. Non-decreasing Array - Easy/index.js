function checkPossibility(nums) {
  let count = 0;
  let wrongIndex = null;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 && nums[i - 1] <= nums[i]) return true;
    if (count > 1) return false;

    if (nums[i] <= nums[i + 1]) {　// 1個前と１個後を見て比べる処理を追加。最初と最後は無視
      continue;
    } else {
      count++;
      wrongIndex = i
    }
  }
  return true;
}

console.log(checkPossibility([3, 4, 2, 3]));


