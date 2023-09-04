/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            leftSum = 0;
            for(let m = 1; m < nums.length; m++) rightSum += nums[m];  
        } else {
            leftSum += nums[i-1];
            rightSum -= nums[i];
        }
        if (leftSum === rightSum) return i;
    }
    return -1;
};