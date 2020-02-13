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
function sumOfLeftLeaves(root) {
  // if (!root) return 0;
  // if (!root.left && !root.right) return 0;

  const helper = (node, isLeft) => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      if (isLeft) {
        return node.val;
      } else {
        return 0;
      }
    }
    return helper(node.right, false) + helper(node.left, true);
  };
  return helper(root, false);
}
