function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;
    if (target > nums[mid]) {
      left = mid + 1;
      console.log(left)
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

console.log(search([-1, 0, 3, 5, 9, 12], 9));
