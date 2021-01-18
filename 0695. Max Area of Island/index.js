/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  let result = 0;
  const width = grid?.[0]?.length;
  const height = grid.length;

  let count = 0;
  const dfs = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= height || j >= width || grid[i][j] === 0) {
      return;
    }

    grid[i][j] = 0;
    count += 1;
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        dfs(grid, i, j);
        result = Math.max(result, count);
        count = 0;
      }
    }
  }
  return result;
};

const gridTest = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];
console.log('result', maxAreaOfIsland(gridTest));
