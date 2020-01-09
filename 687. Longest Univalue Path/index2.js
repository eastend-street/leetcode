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
  console.log(root);
  const result = helper(root, 0);
  return result;
};

const helper = (tree, count) => {
    if(!tree.right && !this.left) return 0;
    
    if(this.left){
        
    }
    return count += 1;
};

console.log(longestUnivaluePath(treeNode));
