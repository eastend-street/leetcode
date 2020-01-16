/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  let result = [];

  for (let x = 1; x <= 1000; x++) {
    for (let y = 1; y <= 1000; y++) {
      const funcResult = customfunction.f(x, y);
      if (funcResult === z) {
        result.push([x, y]);
        break;
      }
      if (funcResult > z) {
        break;
      }
    }
  }
  return result;
};

const binarySearch = (key) => {
  let left = 1;
  let right = 1000;
  let array = [];
  for (let i = 1; i < 1000; i++) {
    array.push(i);
  }
  while (left < right) {
    let mid = (left + right) / 2;
    mid = Math.floor(mid);
    if (array[mid] == key) {
      return mid;
    } else if (key < array[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
};
