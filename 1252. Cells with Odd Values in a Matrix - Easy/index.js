// 二次元配列を定義して、indicesの行・列を+1していく。
// for文でひたすら当たる方法
// 奇数を求めるだけなので、それぞれの数値を定義せずにカウントする方法の方が早い(Yusukeさんの方法)
const oddCells = (n, m, indices) => {
  const cells = [...Array(n)].map(() => new Array(m).fill(0));

  for (let i = 0; i < indices.length; i++) {
    const r = indices[i][0];
    const c = indices[i][1];

    for (let j = 0; j < m; j++) cells[r][j]++;
    for (let k = 0; k < n; k++) cells[k][c]++;
  }
  let count = 0;
  for (const row of cells)
    count += [...row].filter(cell => cell % 2 === 1).length;

  return count;
};

// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6
// indices[i] = [ri, ci]

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1]
  ])
);
