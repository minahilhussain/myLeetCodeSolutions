/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]  > target) break;
        if(nums[i] === target) {
            if(result[0] === -1) {
                result[0] = i;  
            } else {
                result[1] = i;
            }
        }
    }
    return result;
};