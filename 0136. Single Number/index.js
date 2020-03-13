// mapでnum: 回数を持つ
// sortより早い
const singleNumber = nums => {
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  for (const [key, value] of map) {
    if (value < 2) return key;
  }
};
