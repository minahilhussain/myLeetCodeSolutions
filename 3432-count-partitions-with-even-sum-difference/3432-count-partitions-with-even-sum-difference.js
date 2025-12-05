/**
 * @param {number[]} nums
 * @return {number}
 */
var getSum = function(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
} 
var countPartitions = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        let sum = getSum(nums.slice(0, i)) - getSum(nums.slice(i, nums.length));
        if(sum % 2 === 0) count++;
    }
    return count;
};