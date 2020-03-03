const solution = A => {
  if (!A || A.length >= 1000000) return 1;
  const sortedArr = A.slice().sort((a, b) => a - b);
  if (sortedArr[A.length - 1] <= 0) return 1;
  let num;
  for (let i = 0; i < A.length; i++) {
    num = sortedArr.shift();
    if (num > 0 && sortedArr[0] - num > 1) return num + 1;
  }
  return num + 1;
};

// const binarySearch = array => {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if(array[mid] < 0)
//     //   if(array.length)
//   }
// };
console.log(solution([1000000]));
console.log(solution([1, 3, 6, 4, 1, 2]));
