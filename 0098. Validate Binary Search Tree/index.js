const isValidBST = root => {
  const helper = (node, min, max) => {
    if (!node) return true;
    if ((max !== null && node.val >= max) || (min !== null && node.val <= min))
      return false;
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  return helper(root, null, null);
};
