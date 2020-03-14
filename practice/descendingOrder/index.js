// sort
const descendingOrder = num => {
  const arr = num.split("");
  arr.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  return Number(arr.join(""));
};

// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

console.log(descendingOrder(21445));
