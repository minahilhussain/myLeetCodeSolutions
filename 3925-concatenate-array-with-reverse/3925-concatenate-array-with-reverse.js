/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
  let res = [];
  let j = nums.length * 2 - 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i];
    res[j] = nums[i];
    j--;
  }
  return res; 
};