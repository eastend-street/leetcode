const largestTimeFromDigits = A => {
  A.filter(num => {
    return 1 <= num <= 2;
  });
};

// Input: [1,2,3,4]
// Output: "23:41"
console.log(largestTimeFromDigits([1, 2, 3, 4]));
