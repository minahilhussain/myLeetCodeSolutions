/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map = {};
    let ans = [];
    for (let num of nums) {
        if (map[num] === undefined) {
            map[num] = num;
        } else ans.push(num);
    }
    return ans;
};