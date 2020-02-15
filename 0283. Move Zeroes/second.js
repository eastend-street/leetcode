// accepted
const moveZeroes = nums => {
  for (let i = nums.length; i--; ) {  // spliceするとlengthが短くなるので、逆からみることで最初の値までチェックできる
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// [0,0,1]
console.log(moveZeroes([0, 0, 1]));
