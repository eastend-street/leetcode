// Ver.1
// 愚直にガード文
// Test cases [1,2,3,4,5,6]
// 1,2,3,4,5 と2,3,4,5,6の２つの配列に分けて考える（分けた段階では端のつながりを意識しなくていい）
// 分けた2つの値の最大値をとる事で、端の値の結果もカバーできる
const rob = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  if (nums.length === 3) return Math.max(...nums);
  ï;

  //test value = [1,2,3,4,5,6]
  const cache1 = [nums[0], Math.max(nums[0], nums[1])]; //1,2,3,4,5

  //3,4,5
  nums.slice(2, nums.length - 1).forEach((num) => {
    const tmp = Math.max(cache1[1], cache1[0] + num);
    cache1[0] = cache1[1];
    cache1[1] = tmp;
  });

  const cache2 = [nums[1], Math.max(nums[1], nums[2])]; //2,3,4,5,6

  //4,5,6
  nums.slice(3, nums.length).forEach((num) => {
    const tmp = Math.max(cache2[1], cache2[0] + num);
    cache2[0] = cache2[1];
    cache2[1] = tmp;
  });

  return Math.max(cache1[1], cache2[1]);
};

// Ver.2
// 共通部分を関数化
// tempを分割代入に変更
const rob = (nums) => {
  if (nums.length <= 3) return Math.max(...nums);

  const dp = (val) => {
    const cache = [nums[val], Math.max(nums[val], nums[val + 1])];
    nums.slice(val + 2, nums.length - 1 + val).forEach((num) => {
      [cache[0], cache[1]] = [cache[1], Math.max(cache[1], cache[0] + num)];
    });
    return cache[1];
  };
  return Math.max(dp(0), dp(1));
};

// Ver.3
// helperをarrayで受け取るようにしてHouse robber 1のロジックと同じものを適用
// それに伴ってガード文は2以下のみのチェックでOKになる
const rob = (nums) => {
  if (nums.length <= 2) return Math.max(...nums);

  const helper = (array) => {
    const cache = [array[0], Math.max(array[0], array[1])];

    array.slice(2).forEach((num) => {
      [cache[0], cache[1]] = [cache[1], Math.max(cache[1], cache[0] + num)];
    });
    return cache[1];
  };

  const firstArray = nums.slice(0, nums.length - 1);
  const secondArray = nums.slice(1, nums.length);
  return Math.max(helper(firstArray), helper(secondArray));
};
