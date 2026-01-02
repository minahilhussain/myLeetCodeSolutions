/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countElements = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let count = 0;
    const lastIndex = new Map();
    for (let i = 0; i < n; i++) {
        lastIndex.set(nums[i], i);
    }
    for (let i = 0; i < n; i++) {
        const greaterCount = n - lastIndex.get(nums[i]) - 1;
        if (greaterCount >= k) count++;
    }
    return count;
};


