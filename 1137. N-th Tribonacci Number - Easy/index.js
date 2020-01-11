var tribonacci = function(n) {
  const result = sequence(n);
  return result;
};

const sequence = val => {
  let array = [0, 1, 1];
  if (val <= 2) {
    return array[val];
  }
  for (let i = 3; i <= val; i++) {
    let num = 0;
    for (let j = 1; j < 4; j++) {
      num += array[i - j];
    }
    array.push(num);
  }
  return array[array.length - 1];
};

console.log(tribonacci(25));
