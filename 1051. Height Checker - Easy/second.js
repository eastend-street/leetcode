// accepted
const heightChecker = heights => {
  let count = 0;
  const sortedArr = heights.slice().sort((a, b) => (a - b));
  for (let i = 0; i < heights.length; i++) {
    if (sortedArr[i] !== heights[i]) count++;
  }
  return count;
};
console.log(heightChecker([1,2,1,2,1,1,1,2,1]));
