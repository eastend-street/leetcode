
const numIslands = grid => {
  let count = 0;

  //　gridを1つずつ見る二重for loop
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 島が存在する場合、そこから繋がっている島を全て0にして、countをプラス1する
      if (grid[i][j] === "1") count += dfs(grid, i, j);
    }
  }
  return count;
};

const dfs = (grid, i, j) => {
  // gridの枠外の場合、もしくは島がない場合は0を返す
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return 0;
  }

  // grid[i][j]は島があるかチェック済みなので、0を代入して島を消す
  grid[i][j] = "0";
  dfs(grid, i + 1, j);　// 上方向に島が続いてないかチェック。ある場合は島をすべて消す
  dfs(grid, i - 1, j); // 下方向
  dfs(grid, i, j + 1); // 左方向
  dfs(grid, i, j - 1); // 右方向

  return 1;　// 1つの繋がっている島の全てを消し終わったので、カウントを1増やす為に1を返す
};
console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ])
);

// 上下左右のどれかが１のとき→islandではない
// 上下左右のどれ
