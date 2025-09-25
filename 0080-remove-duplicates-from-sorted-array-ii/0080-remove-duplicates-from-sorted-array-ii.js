/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let obj = {};
    let arr = [];
    for (let num of nums) {
        obj[num] = (obj[num] ?? 0) + 1;
        if (obj[num] <= 2) {
            arr.push(num);
        }
    }
    nums.length = arr.length;
    for (let i = 0; i < nums.length; i++) {
        if(arr[i]) nums[i] = arr[i];
    }
};