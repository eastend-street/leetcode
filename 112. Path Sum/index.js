// not accepted
const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right) return sum === root.val;
  const helper = (node, count) => {
    if (!node) return count;

    let left = node.left ? helper(node.left, count + node.val) : count;
    let right = node.right ? helper(node.right, count + node.val) : count;

    return Math.max(sum, left, right);
  };
  console.log(sum, helper(root, 0));
  return sum === helper(root, 0);
};
