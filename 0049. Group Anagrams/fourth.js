const groupAnagrams = strs => {
  const map = new Map();
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!map.has(sortedStr)) map.set(sortedStr, []);
    map.get(sortedStr).push(str);
  }
  return Array.from(map.values());
};
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
