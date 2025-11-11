/**
 * @param {number[]} nums
 * @return {number}
 */
var allZero = function(nums) {
    return nums.every(n => n === 0);
} 
var minimumOperations = function(nums) {
    let count = 0;
    while (!allZero(nums)) {
        let min = Infinity;
        for (let num of nums) {
            if (num > 0 && num < min) {
                min = num;
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) nums[i] -= min;
        }
        count++;
    }
    return count;
};