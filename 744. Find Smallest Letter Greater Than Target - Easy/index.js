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
    let mid = Math.floor(left + right / 2);
    console.log(letters, letters[mid], mid);
    if (mid === 0) return letters[mid + 1];
    if (letters[mid] === target) {
      console.log("fafa");
      return letters[mid + 1];
    }

    if (letters[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[0];
}

console.log(nextGreatestLetter(["c", "f", "j"], "d"));
