// accepted
const moveZeroes = nums => {
  let length = nums.length;
  for (let i = 0; i < length; ) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
      length--; //0がくるたびにlengthを１つ短くする
    } else i++;
  }

  return nums;
};

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// [0,0,1]
console.log(moveZeroes([0, 0, 1]));
