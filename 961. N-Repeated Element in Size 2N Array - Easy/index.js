// accepted but slow
const repeatedNTimes = A => {
  const count = A.length / 2;

  let hash = new Map();
  for (let i = 0; i < A.length; i++) {
    if (hash.has(A[i])) hash.get(A[i]).val++;
    else hash.set(A[i], { val: 1 });

    if (hash.get(A[i]).val === count) return A[i];
  }
};
// Input: [1,2,3,3]
// Output: 3
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
