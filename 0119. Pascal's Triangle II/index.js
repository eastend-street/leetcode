/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [];
  let array = [1, 1];
  for (let j = 2; j < rowIndex; j++) {
    for (let i = 0; i < rowIndex - 1; i++) {
      // array.splice(array.length - 1, 0, array[i] + array[i + 1]);
      array.splice(array.length - 1, 0, "a");
    }
  }
  return array;
};

console.log(getRow(5));
