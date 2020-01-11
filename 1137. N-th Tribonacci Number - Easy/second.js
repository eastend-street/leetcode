/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let array = [0, 1, 1];
  if (n <= 2) {
    return array[n];
  }
  for (let i = 3; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2] + array[i - 3]);
  }
  return array[n];
};
