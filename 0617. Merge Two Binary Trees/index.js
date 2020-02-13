// not resolved
const mergeTrees = (t1, t2) => {
  if (!t1 && !t2) return null;
  if (!t1) return t2;
  if (!t2) return t1;
  let root = new TreeNode(t1.val + t2.val);
  const helper = (node, n1, n2) => {
    if (!n1 && !n2) return null;
    if (!n1) return new TreeNode(n2.val);
    if (!n2) return new TreeNode(n1.val);

    node = new TreeNode(n1.val + n2.val);
    node.right = helper(node.right, n1.right, n2.right);
    node.left = helper(node.left, n1.left, n2.left);
    return node;
  };
  return helper(root, t1, t2);
};
