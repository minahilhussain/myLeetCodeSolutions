/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let org_sum = 0;
    for(let i=0;i<n;i++) {
        org_sum += nums[i];
    }
    return (n*(n+1)/2 -org_sum);
};