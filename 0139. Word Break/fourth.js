const wordBreak = (s, wordDict) => {
  // そのindexの手前までの値が、辞書に存在するかチェックする配列を定義
  const arr = new Array(s.length + 1).fill(false);
  arr[0] = true; // １文字目より前は空文字なので、必ず辞書に存在するとしてtrueを挿入

  // sを１文字ずつチェック
  for (let i = 0; i < s.length + 1; i++) {
    // １文字目からs[i]までの文字列を、１文字ずつチェック
    for (let j = 0; j < i; j++) {
      // arr[j]より前の値は辞書に存在しないので、この以降のパターンは見る必要がない。
      // なぜならその先に辞書に存在するものがあっても、その前が存在しないので必ずfalseになる。
      // これによって最終結果がfalseになる値の時の無駄なチェックをしなくて済む。
      if (!arr[j]) continue;

      // indexのj~iの文字列が辞書に存在する場合
      if (wordDict.includes(s.slice(j, i))) {
        // index j~iまでは辞書に存在するというtrueをarrに挿入
        // こうすることで,memo化を行い、毎回index j以前の値のパターンを検証しなくてよくなる
        arr[i] = true;
        break; // その先は見なくてよいのでbreak
      }
    }
  }

  // 最後までマッチする値があるかチェック
  return arr[s.length];
};

console.log(wordBreak("cars", ["ca", "rs", "car"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
