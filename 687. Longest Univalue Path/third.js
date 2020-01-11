function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const left = new TreeNode(4);
left.left = 4;
left.right = 4;

const right = new TreeNode(5);
right.right = 5;
right.left = null;

const treeNode = new TreeNode(1);
treeNode.left = left;
treeNode.right = right;

var longestUnivaluePath = function(root) {
  let max = 0;
  const helper = (node) => {
    
    // return is left or right
    return 
  };

  helper(root);
  return max;
};

console.log(longestUnivaluePath(treeNode));