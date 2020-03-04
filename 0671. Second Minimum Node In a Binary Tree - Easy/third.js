const findSecondMinimumValue = root => {
  let min = root.val;
  let second = -1;
  const helper = node => {
    if (!node) return;
    if (min === node.val) {
      helper(node.left);
      helper(node.right);
      return;
    }
    if (second === -1 || node.val < second) second = node.val;
  };
  helper(root);
  return second;
};
