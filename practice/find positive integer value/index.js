const solution = A => {
  if (!A || A.length >= 1000000) return 1;
  const sortedArr = A.slice().sort((a, b) => a - b);
  if (sortedArr[A.length - 1] <= 0 || sortedArr[A.length - 1] >= 1000000) return 1;
  let num;
  for (let i = 0; i < A.length; i++) {
    num = sortedArr.shift();
    if (num > 0 && sortedArr[0] - num > 1) return num + 1;
  }
  return num + 1;
};
console.log(solution([0]));
console.log(solution([1, 3, 6, 4, 1, 2]));
