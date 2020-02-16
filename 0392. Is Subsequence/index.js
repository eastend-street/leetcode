// not accepted
const isSubsequence = (s, t) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  let index;
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      if (index > map.get(t[i])) return false;
      index = map.get(t[i]);
    }
  }
  return true;
};

// s = "abc", t = "ahbgdc"
console.log(isSubsequence("acb", "ahbgdc"));
