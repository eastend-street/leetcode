const hasPathSum = (root, targetSum) => {
    if(!root) return false
    if (!root.left && !root.right) return root.val === targetSum;
  
    const leftSum = hasPathSum(root.left, targetSum - root.val);
    const rightSum = hasPathSum(root.right, targetSum - root.val);
  
    return leftSum || rightSum;
  };