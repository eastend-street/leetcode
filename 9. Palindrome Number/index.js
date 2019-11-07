/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x === 0) return true;

  const strX = String(x);
  let tmp = x;
  let result = "";
  while (tmp !== 0) {
    result += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  return strX === result;
};
