/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  const helper = (root, count) => {
    if (!root?.val && root?.val !== 0) return count;
    return (
      count + 1 + Math.max(helper(root.left, count), helper(root.right, count))
    );
  };
  return helper(root, 0);
};
