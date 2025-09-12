/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let orgSum = 0;
    for (let i = 0; i < nums.length; i++) {
        orgSum += nums[i];
    }
    return (n * (n + 1) / 2 - orgSum);
};