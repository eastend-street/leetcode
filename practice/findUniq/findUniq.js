// Isao solution
// const findUniq = arr => {
//   const set = new Set(arr);
//   let countA = 0;
//   let countB = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === set.values[0]) {
//       countA++;
//     } else if (arr[i] === set.values[1]) {
//       countB++;
//     }
//     if (countA > 1) {
//       return set.values[1];
//     } else if (countB > 1) {
//       return set.values[0];
//     }
//   }
// }

// for (const num in set) {
//   if (arr.includes(num)) {
//     // remove num from arr
//   }
// }

// for (const num in set) {
//   if (arr.includes(num)) {
//     set.delete(num);
//   }
// }

// return Array.from(set)[0];

console.log(findUniq([1, 1, 1, 2, 1, 1, 3, 3]));
