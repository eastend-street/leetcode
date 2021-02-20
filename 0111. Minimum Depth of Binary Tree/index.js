// DFS but this problem should use BFS since it needs only min number. No need to look into the max depth
const minDepth = (root) => {
  if (!root) return 0;

  if (!root.right && !root.left) return 1;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.right), minDepth(root.left)) + 1;
};
ï;
