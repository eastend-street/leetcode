const wordBreak = (s, wordDict) => {
  // そこまでマッチしたかを保存するbooleanの配列を定義
  const arr = new Array(s.length + 1);
  arr[0] = true;
  // sの文字列を一文字ずつチェック
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (arr[j] && wordDict.includes(word)) {
        arr[i] = true;
      } else {
        // console.log(i);
        arr[i] = false;
      }
    }
  }
  return arr[arr.length - 2];
};

// "cars"
// ["ca","rs", "car"]
// true

console.log(wordBreak("cars", ["ca", "rs", "car"]));

// そこまでマッチしたかを保存するbooleanの配列を定義 index0はtrue
// 手前までマッチしていれば、そこまでどのようにきたのかは関係ないのでスキップ
