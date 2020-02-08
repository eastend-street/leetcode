function generate(numRows) {
  let array = [];
  for (let i = 0; i < numRows; i++) {
    array.push([1]);
    for (let j = 1; j < i + 1; j++) {
      if (j == i) array[i].push(1);
      else array[i].push(array[i - 1][j - 1] + array[i - 1][j]);
    }
  }
  return array;
}

console.log(generate(5));
