/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++ ){
        obj[nums[i]] = (obj[nums[i]] ?? 0) + 1;
    }
    const frequencies = Object.values(obj);
    const max = Math.max(...frequencies);

    let maxfreq = 0;
    for (let i = 0; i < frequencies.length; i++) {
        if(frequencies[i] === max) maxfreq += max;
    }
    return maxfreq;
};