/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArr = [];
    for(let i = 0; i< n ; i++) newArr.push(nums[i], nums[i+n]);
    return newArr;
};