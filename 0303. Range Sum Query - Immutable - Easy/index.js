/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums        
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    for(let k = i; k < this.nums.length; k++){
        sum += this.nums[k]
        if(k === j) break;
    }
    return sum
};

// [1,2,3,4]
// [1,3,6,10]

//1-2 →5
// 2-3→7

// 1, 3,6,10

// 0-1→