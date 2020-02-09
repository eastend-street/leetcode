// https://www.youtube.com/watch?v=W8VuDt0eb5c

const maxAreaOfIsland = grid => {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {  // gridの中身を１段ずつ見る
    for (let j = 0; j < grid[i].length; j++) {　// gridの中身を横に1つずつ見る
      if (grid[i][j] === 1){　// 島があった場合
        max = Math.max(max, dfs(grid, i, j));　// 島がどこまでつながっているか深さ優先探索。現在のmaxよりも大きい場合はmaxを更新
      } 
    }
  }
  return max;
};

// 島があった場合、どこまで繋がっているか検索する
const dfs = (grid, i, j) => {
  if (!grid[i] || !grid[i][j] || grid[i][j] === 0) return 0; // gridの枠外の場合、もしくは島ではない場合（値が0の場合）は0を返す
  let count = 1;　// 0の場合は上の行でチェックしているので、この段階では島が存在しているので+1する
  grid[i][j] = 0;　// もう一度島があるかチェックされるのを防ぐため、0を代入して島を消す
  count += dfs(grid, i - 1, j); // 上に向かって繋がっている島のカウントをチェック
  count += dfs(grid, i + 1, j); // 下
  count += dfs(grid, i, j - 1); // 左
  count += dfs(grid, i, j + 1); // 右
  return count;　// 島の繋がっている合計を返す
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ])
);
