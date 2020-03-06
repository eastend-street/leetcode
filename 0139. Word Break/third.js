const wordBreak = (s, wordDict) => {
  // そこまでマッチしたかを保存するbooleanの配列を定義
  const arr = new Array(s.length + 1).fill(false);
  arr[0] = true;

  // sの文字列を一文字ずつチェック
  for (let i = 0; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (!arr[j]) continue;

      const word = s.slice(j, i);
      if (wordDict.includes(word)) {
        arr[i] = true;
        console.log("true:", word);
        break;
      }
    }
  }

  console.log(s.length);
  return arr[s.length];
};

// "cars"
// ["ca","rs", "car"]
// true

// "catsandog"
// ["cats","dog","sand","and","cat"]
// false

// console.log(wordBreak("cars", ["ca", "rs", "car"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));

// そこまでマッチしたかを保存するbooleanの配列を定義 index0はtrue
// 手前までマッチしていれば、そこまでどのようにきたのかは関係ないのでスキップ
