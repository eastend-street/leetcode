// Brute forceで行なっていた,内側のfor loopをhashのキー検索に変える。
// 配列を逐一見る必要がなくなるので早くなる

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) {
      return [i, map.get(comp)];
    }
    map.set(nums[i], i);
  }
  return [];Ï
}
