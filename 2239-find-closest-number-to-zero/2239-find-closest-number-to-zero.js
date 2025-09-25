/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(Math.abs(nums[i]));
    }
    let min = arr[0];
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] < min || (arr[i] === min && nums[i] > nums[index])) {
            min = arr[i];
            index = i;
        }
    }
    return nums[index];
};