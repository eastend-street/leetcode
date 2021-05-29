const rob = (nums) => {
  if (nums.length === 1) return nums[0];
  // cacheはその時点の最大値が入る（その時点でのindexの数字を使う必要はない）
  const cache = new Array(nums.length).fill(0);

  nums.forEach((num, index) => {
    if (index === 0) {
      cache[index] = num;
    } else if (index === 1) {
      cache[index] = Math.max(cache[0], num);
    } else if (index === 2) {
      cache[index] = Math.max(num + cache[index - 2], cache[index - 1]);
    } else {
      const before = cache[index - 1];
      const beforeTwoWithCurrent = cache[index - 2] + num;
      const beforeThreeWithCurrent = cache[index - 3] + num;
      // 4つ前は見なくて良い。それは2つ前の数字を足して出た数字の方が必ず大きくなるから。
      cache[index] = Math.max(
        before,
        beforeTwoWithCurrent,
        beforeThreeWithCurrent
      );
    }
  });

  return cache[nums.length - 1];
};

// Cacheを3つの値のみで済ませるパターン(nums.length分取らない)
const rob1 = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const cache = [
    nums[0],
    Math.max(nums[0], nums[1]),
    Math.max(nums[2] + nums[0], nums[1]),
  ];

  nums.slice(3).forEach((num) => {
    const temp = Math.max(cache[2], cache[1] + num, cache[0] + num);
    cache[0] = cache[1];
    cache[1] = cache[2];
    cache[2] = temp;
  });

  return cache[2];
};

// cacheを2つの値で済むパターン。なぜなら、nums[1]の段階で最大値が取れるから。(その時点でのindexの値を含まなくても良い)
const rob2 = (nums) => {
  if (nums.length === 1) return nums[0];

  const cache = [nums[0], Math.max(nums[0], nums[1])];

  nums.slice(2).forEach((num) => {
    // const temp = Math.max(cache[1], cache[0] + num);
    // cache[0] = cache[1];
    // cache[1] = temp

    //tempを使わずにswapする
    [cache[0], cache[1]] = [cache[1], Math.max(cache[1], cache[0] + num)];
  });

  return cache[1];
};
