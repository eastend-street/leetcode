// resolved
function groupAnagrams(strs) {
  let hash = new Map();
  for(s of strs){
      let sortedStr = s.split("").sort().join("")
      if(hash.has(sortedStr)) hash.get(sortedStr).push(s)
      else hash.set(sortedStr, [s])
  }
  let array = []
  for(let v of hash.values()){
      array.push(v)
  } 
  return array
}

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
