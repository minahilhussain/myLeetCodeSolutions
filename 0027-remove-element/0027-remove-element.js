/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = nums.indexOf(val);
    while(index > -1) {
        nums.splice(index, 1);
        index = nums.indexOf(val);
    }
    return nums.length;
};