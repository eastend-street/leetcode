const sortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;

  const node = {};
  const mid = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, mid);
  const rightArray = nums.slice(mid + 1, nums.length);
  node.val = nums[mid];
  node.left = sortedArrayToBST(leftArray);
  node.right = sortedArrayToBST(rightArray);

  return node;
};
