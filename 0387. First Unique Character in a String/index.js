// this is linear solution. it's better to use lastIndexOf like below
// https://leetcode.com/problems/first-unique-character-in-a-string/discuss/86530/Staightforward-JavaScript-Solution
function firstUniqChar(s) {
  let arr = s.split("");
  let hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i])) hash.set(arr[i], hash.get(arr[i]) + 1);
    else hash.set(arr[i], 0);
  }
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === 0) return i;
  }
  return -1;
}

// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.

console.log(firstUniqChar("loveleetcode"));
