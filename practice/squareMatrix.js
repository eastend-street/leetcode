// Given a positive integer n, generate a square matrix
// filled with elements from 1 to n^2 in spiral order.

// Example:
// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

// Input: 2
// [
//  [ 1, 2 ],
//  [ 4, 3 ],
// ]

const squareMatrix = num => {
  let result = [];
  let count = 1;

  let startRow = 0;
  let endRow = num;
  let startCol = 0;
  let endCol = num;

  // define array
  for (let i = 0; i < num; i++) {
    result.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    // left to right
    for (let i = startCol; i < endCol; i++) {
      result[startRow].splice(i, 0, count);
      count++;
    }
    startRow++;

    // // top to bottom
    for (let i = startRow; i < endRow; i++) {
      result[i].splice(num - endCol, 0, count);
      count++;
    }
    endCol--;

    // // right to left
    for (let i = endCol; i > startCol; i--) {
      result[endRow - 1].splice(-(num - i), 0, count);
      count++;
    }

    endRow--;

    // bottom to top
    for (let i = endRow; i > startRow; i--) {
      result[i - 1].splice(startCol, 0, count);
      count++;
    }
    startCol++;
  }
  return result;
};

console.log(squareMatrix(5));
