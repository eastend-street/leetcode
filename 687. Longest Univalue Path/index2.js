// not resolved

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
  const helper = (parentVal, childTree) => {
    if (childTree === null) return 0;

    let leftCount = helper(childTree.val, childTree.left);
    let rightCount = helper(childTree.val, childTree.right);

    max = Math.max(max, leftCount + rightCount);
    if (parentVal === childTree.val) {
      console.log(leftCount);
      return Math.max(leftCount, rightCount) + 1;
    } else {
      return 0;
    }
  };

  helper(root.val, root);
  return max;
};

console.log(longestUnivaluePath(treeNode));

// それぞれのノードで判断するのは、自分が折り返しだとしたときに何個つながっているか
// 子ノードの折り返しは、子ノードが判断するので、書く必要はない
