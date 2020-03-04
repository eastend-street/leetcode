// accepted
const findSecondMinimumValue = root => {
  let min = root.val;
  let second = -1;
  const helper = node => {
    if (!node) return;
    if (node.val !== min && second === -1) second = node.val;
    if (node.val < second && node.val !== min) {
      second = node.val;
      return;
    }
    if (node.val > second && second !== -1) return;
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return second;
};
