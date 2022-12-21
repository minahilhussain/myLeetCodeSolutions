/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target);
    if(index!== -1) return index;
    else {
        return nums.filter(num=>num<target).length;
    }
};