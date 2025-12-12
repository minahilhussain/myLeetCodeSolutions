/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq = {};
    for (let num of nums) {
        if (freq[num] === undefined) {
            freq[num] = 1;
        } else {
            freq[num]++;
        }
    }
    nums.sort((a, b) => {
        if (freq[a] === freq[b]) {
            return b - a; 
        }
        return freq[a] - freq[b];
    });
    return nums;
};