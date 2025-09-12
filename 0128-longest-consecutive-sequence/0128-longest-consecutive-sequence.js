/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    let maxLen = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let length = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            maxLen = Math.max(maxLen, length);
        }
    }

    return maxLen;
};
