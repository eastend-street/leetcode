/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows <= 1) return s;

  const strArray = s.split("");
  let array = [];
  let result = "";
  let isDown = true;
  let row = 0;

  for (let i = 0; i < strArray.length; i++) {
    if (i < numRows) {
      array.push([strArray[i]]);
    } else {
      array[row].push(strArray[i]);
    }

    isDown ? row++ : row--;
    if (row === 0 || row === numRows - 1) isDown = !isDown;
  }

  array.map(r => (result += r.join("")));
  return result;
}

console.log(convert("PAYPALISHIRING", 3));
//Output: "PAHNAPLSIIGYIR"
