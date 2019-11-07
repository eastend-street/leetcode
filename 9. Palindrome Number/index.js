/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const strX = String(x);
  let tmp = x;
  let result = "";
  for (let i = 0; i < strX.length; i++) {
    result += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  if (strX === result) {
    return true;
  } else {
    return false;
  }
};
