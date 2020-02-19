// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// accepted
const sortedSquares = A => {
  let arr = [];
  let left = 0;
  let right = A.length - 1;
  while (left <= right) {
    if (left === right) {
      arr.push(A[left] * A[left]);
      break;
    }
    arr.push(A[left] * A[left]);
    arr.push(A[right] * A[right]);
    left++;
    right--;
  }
  return arr.sort((a, b) => (a < b ? -1 : 1));
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
