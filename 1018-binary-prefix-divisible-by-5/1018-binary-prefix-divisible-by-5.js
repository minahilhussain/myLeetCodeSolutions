/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let res = [];
    nums.reduce((acc, cur) => {
      acc = (acc * 2 + cur) % 5;
      res.push(acc === 0);
      return acc;
    }, 0);
  return res;
};