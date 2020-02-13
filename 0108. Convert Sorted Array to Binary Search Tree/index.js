function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const root = makeNode(nums, 0, nums.length - 1);
  return root;
};

const makeNode = (list, startIndex, endIndex) => {
  const middle = Math.floor((startIndex + endIndex) / 2);
  const root = new TreeNode(list[middle]);
  if (startIndex === endIndex) {
    return new TreeNode(list[startIndex]);
  }
  if (startIndex > endIndex) {
    return null;
  }
  root.left = makeNode(list, startIndex, middle - 1);
  root.right = makeNode(list, middle + 1, endIndex);
  return root;
};

console.log(sortedArrayToBST([-21, -15, -16, -10, -3, 0, 5, 9, 10]));
