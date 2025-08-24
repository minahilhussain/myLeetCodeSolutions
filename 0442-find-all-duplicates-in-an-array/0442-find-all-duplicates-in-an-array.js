/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let unique = new Set(), result = [];
    for (let num of nums) {
      unique.has(num) ? result.push(num) : unique.add(num);
    }
    return result;
};