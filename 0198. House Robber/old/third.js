function rob(nums) {
  let total = 0;
  let prevVal = 0;
  for (let i = 0; i < nums.length; i++) {
    // 前の値を取ってた場合 && 前の値より今の値を追加した方が大きい場合
    if (prevVal === nums[i - 1] && total <= total - prevVal + nums[i] + (nums[i -2] || 0)) {
      //前の値をトータルから引き、現在の値と2つ前の値を追加
      total = total - prevVal + nums[i] + (nums[i - 2] || 0);
      //　前の値（prevVal）に現在の値を追加
      prevVal = nums[i];
    } else if (prevVal !== nums[i - 1]) {
      // 前の値を取ってなかった場合
      console.log("tottenai", i);
      //現在の値をトータルに追加
      total = total + nums[i];

      //　前の値（prevVal）に現在の値を追加
      prevVal = nums[i];
    }else {
      console.log(i, nums[i])
    }
  }

  return total;
}

console.log(rob([2,7,9,3,1]));

// 各ステップで値をとるかとらないか判断。orderはn, spaceは1

// 1つめ　-- ただ追加
// 2つめ　-- 1つめと比べて
