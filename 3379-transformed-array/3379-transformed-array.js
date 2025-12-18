/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let size = nums.length;
    let result = [];
    for (let i = 0; i < size; i++) {
        if (nums[i] > 0) {
            const step = nums[i] % size;
            result[i] = nums[(i + step) % size];
        } else if (nums[i] < 0) {
            const step = Math.abs(nums[i]) % size;
            result[i] = nums[(i - step + size) % size];
        } else {
            result[i] = nums[i];
        }
    }
    return result;
};

