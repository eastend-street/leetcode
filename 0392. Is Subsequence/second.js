// accepted
// ｓに含まれる文字がでたらsのindex(count)を+1する。
// 最後にsに含まれる文字列がすべて出現したかチェックし、すべて出ていればtrueを返す
const isSubsequence = (s, t) => {
  let count = 0;
  for (const char of t) {
    if (s[count] === char) count++;
  }
  return count === s.length ? true : false;
};

// s = "abc", t = "ahbgdc"
console.log(isSubsequence("abc", "ahbgdc"));
