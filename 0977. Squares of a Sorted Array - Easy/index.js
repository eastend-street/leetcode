// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// accepted
const sortedSquares = A => {
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    arr.push(A[i] * A[i]);
  }
  return arr.sort((a, b) => (a < b ? -1 : 1));
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
