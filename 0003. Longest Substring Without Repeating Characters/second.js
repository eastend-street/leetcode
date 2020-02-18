// need to change to map
const lengthOfLongestSubstring = s => {
  const strs = s.split("");
  let max = 0;
  const set = new Set();
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] !== strs[i + 1] && !set.has(strs[i])) {
      set.add(strs[i]);
    } else {
      max = Math.max(max, set.size);
      set.clear();
    }
  }
  return max;
};

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring("abcabcbb"));
