/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let map = {};
    const n = nums.length / 2;
    for (const num of nums) {
       map[num] = (map[num] || 0) + 1;
       if (map[num] === n) return num;
    }
    return -1;
};