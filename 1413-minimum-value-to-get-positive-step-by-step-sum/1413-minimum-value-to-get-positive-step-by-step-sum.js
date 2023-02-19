/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0;
    let res = 1;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum < 1 && 1 - sum > res) res = 1 - sum;
    }
    return res;
};
