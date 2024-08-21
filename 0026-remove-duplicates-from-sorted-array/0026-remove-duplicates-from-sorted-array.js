/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let val = nums[0];
    let uniqueArray = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== val) {
            uniqueArray.push(nums[i]);
            val = nums[i]
        }
    }
    for(let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }
    return uniqueArray.length;
};