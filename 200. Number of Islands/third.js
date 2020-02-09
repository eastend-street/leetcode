// remove return 0, 
const numIslands = grid => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") count += dfs(grid, i, j);
    }
  }
  return count;
};

const dfs = (grid, i, j) => {
  if (!grid[i] || !grid[i][j] || grid[i][j] === "0") return;
  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  return 1;
};
