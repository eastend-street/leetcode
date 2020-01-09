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
  const result = helper(root, 0);
  return result;
};

const helper = (tree, count) => {
  if (!tree) return 0;

  if (tree.right.val === tree.val) {
    console.log("right");
    count++;
  } else if (tree.left.val === tree.val) {
    console.log("left");
    count++;
  } else {
    // count = 1;
  }
  helper(tree.right, count);
  helper(tree.left, count);
  return count;
};

console.log(longestUnivaluePath(treeNode));
