function intersection(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let array = [];
  for (let s of set2) {
    if (set1.has(s)) array.push(s);
  }
  return array;
}

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
console.log(intersection([1, 2, 2, 1], [2, 2]));
