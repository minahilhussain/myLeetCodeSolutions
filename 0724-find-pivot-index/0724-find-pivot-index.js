/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivot = -1;
    for(let i = 0; i < nums.length; i++) {
        let leftSum = arraySum(nums.slice(0 , i));
        let rightSum = arraySum(nums.slice(i+1, nums.length));
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};


var arraySum = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) sum += nums[i]; 
    return sum;
}