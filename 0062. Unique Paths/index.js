// 組み合わせの公式を使用（動的計画法の解法をより数学の公式でより一般化する）
// https://rikeilabo.com/formula-and-diferrence-of-permutation-combination
const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) return 1;

  const reducer = (acc, current) => acc * current;

  const numerator = [...Array(n - 1).keys()]
    .map((i) => m + n - 2 - i) // (m - 1) + (n - 1) - i を簡略化したもの
    .reduce(reducer);
  const denominator = [...Array(n - 1).keys()].map((i) => ++i).reduce(reducer);

  return numerator / denominator;
  // return (m + n -2) c (n -1)
};

// オーバーフロー対策済み
const uniquePaths2 = (m, n) => {
  if (m === 1 || n === 1) return 1;

  const reducer = (acc, current) => acc * current;

  return [...Array(n - 1).keys()]
    .map((i) => {
      const numerator = m + n - 2 - i;
      const denominator = i + 1;
      return numerator / denominator; // 分母と分子を毎回割ることでオーバフローを防ぐ
    })
    .reduce(reducer);
};
