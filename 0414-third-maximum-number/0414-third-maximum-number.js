/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let unique = new Set(nums);
    let uniqueArr = Array.from(unique).sort((a, b) => a - b);
    let len = uniqueArr.length;
    return len >= 3 ? uniqueArr[len - 3] : uniqueArr[len - 1];
};