const findDuplicate = nums => {
  let result;
  const arr = nums.slice().sort((a, b) => {
    if (a === b) result = a;
    return a - b;
  });

  console.log(result);
};

// Input: [1,3,4,2,2]
// Output: 2

console.log(findDuplicate([1, 3, 4, 2, 2]));
