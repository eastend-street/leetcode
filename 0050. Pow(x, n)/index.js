// not resolved
const myPow = (x, n) => {
  let sum = x;
  for (let i = 1; i < n; i++) {
    sum = sum * x;
  }
  return sum;
};

// Input: 2.00000, 10
// Output: 1024.00000

console.log(myPow(2.0, 10));
