// function nextGreatestLetter(letters, target) {
//   for (let i = 0; i < letters.length; i++) {
//     if (target < letters[i]) {
//       return letters[i];
//     }
//   }
//   return letters[0];
// }

function nextGreatestLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target < letters[mid] && letters[mid - 1] <= target) {
      return letters[mid];
    }

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[0]
}

console.log(nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"], "e"));