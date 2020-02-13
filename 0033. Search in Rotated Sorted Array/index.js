// unresolved
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log("mid: " + mid);
    if (nums[mid] === target) return mid;

    if (mid < target) {
    //   if (nums[0] < target) left = mid + 1;
    //   else right = mid - 1;
    } else {
      if (target < nums[0]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// 二分探索で値を探す。
//

console.log(search([4, 5, 6, 7, 0, 1, 2], 6));
