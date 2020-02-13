/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const strArr = s.split("");
  let max = 1;
  let count = 1;
  for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i], count);
    if (i === 0) {
      count++;
      continue;
    }
    if (strArr[i] === strArr[i + 1]) {
      if (max < count) {
        max = count;
      }
      count = 0;
    }
    count++;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
