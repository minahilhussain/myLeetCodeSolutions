/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let start = 0; 
    let end = nums.length - 1; 
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            arr[start] = nums[i];
            start++;
        } else {
            arr[end] = nums[i];
            end--;
        }
    }
    return  arr;
};