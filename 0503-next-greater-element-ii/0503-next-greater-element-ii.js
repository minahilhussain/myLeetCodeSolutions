/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let j = i === nums.length - 1 ? 0: i + 1;
        while (j !== i) {
            if (nums[j] > nums[i]) {
                result.push(nums[j]);
                break;
            }
            j++;
            if (j === nums.length) j = 0;
        }
        if (result.length < i + 1 ) {
            result.push(-1);
        }
    }
    return result;
};