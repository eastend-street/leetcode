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


// Leetcode: 41. First Missing Positive
// https://leetcode.com/problems/first-missing-positive/
// sortをしない方法
// 最初から順に見ていって、見ている数字のindexと交換する
// [2,4,1] → [4, 2, 1] （2を２番目に持って行き、そこにあった4は2のあった位置に移動）
// -があった場合はそのまま続ける
// 最後にindexと噛み合わない数字が答え
// [2,4,1]→[4,2,1]→[1,2,4]（4のところには本来3が入るので、3が答え）

// 解法
// https://leetcode.com/problems/first-missing-positive/discuss/17071/My-short-c%2B%2B-solution-O(1)-space-and-O(n)-time