// need to understand why it needs maxLeft and maxRight
// resolved

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// const left = new TreeNode(4);
// left.left = 4;
// left.right = 4;

// const right = new TreeNode(5);
// right.right = 5;
// right.left = null;

// const treeNode = new TreeNode(1);
// treeNode.left = left;
// treeNode.right = right;
const left = new TreeNode(4);
left.left = 1;
left.right = 1;

const right = new TreeNode(5);
right.right = 5;
right.left = null;

const treeNode = new TreeNode(5);
treeNode.left = left;
treeNode.right = right;

var longestUnivaluePath = function(root) {
  let max = 0;
  const helper = node => {
    if (!node) return 0;
    let left = helper(node.left);
    let right = helper(node.right);

    let maxLeft = 0;
    let maxRight = 0;
    if (node.left && node.left.val === node.val) {
      maxLeft = left + 1;
    }
    if (node.right && node.right.val === node.val) {
      maxRight = right + 1;
    }
    max = Math.max(max, maxLeft + maxRight);
    // return is left or right
    return Math.max(maxLeft, maxRight);
  };

  helper(root);
  return max;
};

console.log("result", longestUnivaluePath(treeNode));
