// 配列を見て、当てはまるワードを引いていく
// "data-123".replace('data-','');

const wordBreak = (s, wordDict) => {
  const memo = [];
  for (let i = 0; i < wordDict.length; i++) {
    const replaced = s.replace(new RegExp(wordDict[i], "g"), "");
    if (s !== replaced) {
      memo.push(wordDict[i]);
      s = replaced;
      continue;
    }
    const replaced2 = (memo.join("") + replaced).replace(
      new RegExp(wordDict[i], "g"),
      ""
    );
    if (s !== replaced2) {
      const str = replaced2.filter(
        itemA =>
          memo
            .join("")
            .split("")
            .indexOf(itemA) == -1
      );
      console.log(str);
    }
  }
  return s === "";
};

// "cars"
// ["ca","rs", "car"]
// true

console.log(wordBreak("cars", ["car", "ca", "rs"]));

// そこまでマッチしたかを保存するbooleanの配列を定義 index0はtrue
// 手前までマッチしていれば、そこまでどのようにきたのかは関係ないのでスキップ
