// accepted but time complexity is slow
// dynamic programming
const uniquePaths = (m, n) => {
  if (m === 0 || n === 0) return 0; // エッジケース(長さが0の場合)は0を返す　

  // 多次元配列 arr[m][n]を定義する
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
  }

  // １つ１つにunique pathを入れていく
  // number of unique pathはm,nのどちらかが0の場合は1パターン
  // それ以外の場合はその座標の上隣と左隣の合計がnumber of unique pathとなる
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) arr[i][j] = 1;  // m,nが0の場合は1
      else arr[i][j] = arr[i - 1][j] + arr[i][j - 1]; // 上隣(j-1),左隣(i-1)の合計を追加する
    }
  }

  return arr[m - 1][n - 1]; // ゴールの数を返す
};

const helper = (arr, m, n) => {};

// Input: m(x) = 3, n(y) = 2
// Output: 3

console.log(uniquePaths(3, 2));
