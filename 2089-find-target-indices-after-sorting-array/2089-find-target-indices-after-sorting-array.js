/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const numsArr = nums.sort();
    const result = [];
    for (let i = 0; i < numsArr.length; i++) {
        if(nums[i] === target) result.push(i);
    }
    return result;
};