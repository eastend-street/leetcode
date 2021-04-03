/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  if (!root) return [];
  const result = [];

  const que = [root];
  while (que.length > 0) {
    const queLength = que.length;
    const innerResult = [];
    const isReverse = result.length % 2 !== 0;

    for (let i = 0; i < queLength; i++) {
      const innerRoot = que.shift();
      innerResult.push(innerRoot.val);

      if (innerRoot.left) que.push(innerRoot.left);
      if (innerRoot.right) que.push(innerRoot.right);
    }
    result.push(isReverse ? innerResult.reverse() : innerResult);
  }
  return result;
};
