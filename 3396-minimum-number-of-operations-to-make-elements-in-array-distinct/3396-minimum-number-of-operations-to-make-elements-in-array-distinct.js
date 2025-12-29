/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    while (nums.length !== Array.from(new Set(nums)).length) {
        nums = nums.slice(3, nums.length);
        count++;
    }
    return count;
};